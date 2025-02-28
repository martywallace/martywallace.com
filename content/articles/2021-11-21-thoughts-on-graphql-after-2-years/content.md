Two years ago, the company I work for started to explore GraphQL. A proof of concept was kicked off using Node.js, Apollo Server and Express. A small amount of existing public data was added to showcase the basic functionality of GraphQL to the rest of the company, which was well-received. It was promoted to a production environment and grew very slowly for 4 months until a new major piece of functionality was added to our product, built directly on top of GraphQL. This led to more aggressive contributions to the project, which is now a critical service on par with our primary API built on PHP.

Though initially pioneered by a coworker, GraphQL is a project that I became deeply invested in and championed from the original proof of concept to its current state. I refactored it and properly implemented [Apollo Federation](https://www.apollographql.com/docs/federation) using multiple smaller subgraphs and a gateway, split into separate deployments, each a separate [Nest.js](https://nestjs.com) application. I ported existing core functionality to the graph and took responsibility for the majority of its documentation and maintenance so that the rest of the engineering team could confidently build new features on top of it. _I learned what makes it a good choice and what makes it a bad one._

## Exploratory Stage

Developers exploring GraphQL for the first time trying to get an idea of what it can offer will come across these typical selling points:

1. It allows clients to query just the data they need and they can get it in fewer requests than what might be required in a REST API. This makes it much easier to build applications that transfer the smallest amount of data and make the least amount of HTTP calls possible. This is particularly important for mobile applications.
2. It allows the server to focus on describing the data it provides access to rather than worrying about designing dozens of REST endpoints. The server simply defines an `Article`, `Author` and `Tag`s and the relationship between them. A REST API needs to decide on how much data is provided by which endpoints and optionally implement a nonstandard method of including or excluding certain elements from the response to reduce its size, something GraphQL does by design.

These are good points that unfortunately barely scratch the surface of GraphQL’s true potential. A naive developer can either get excited about just these things and underestimate the learning curve of setting up a GraphQL server that can perform optimally, or dismiss them as trivial to implement in a REST-style API and never explore GraphQL properly.

---

## Beneath the Surface

The true power of GraphQL begins to reveal itself once you properly start to understand that you’re building a single graph of data, rather than predefined sets of data at predefined URLs. The graph can grow very naturally over a long (e.g. multi-year) development period because all you need to care about is adding new entities, fields and relationships that your consumers may or may not care about. In the case of existing consumers that don’t care about new data, the response payloads stay the same size. Consumers that want to leverage this data can easily get it with very minor tweaks to the request on their end, rather than needing to call additional endpoints and manually reconcile the data.

## Problems with REST

Here’s a simple example to demonstrate what I’m talking about above. Say we have a REST endpoint that returns news articles:

```
GET /articles?limit=10&offset=0
```

```json
{
  "total": 55,
  "limit": 10,
  "offset": 0,
  "articles": [
    {
      "title": "Example Article",
      "published": "2022-05-18T09:24:18.536Z",
      "body": "<p>This article is about...</p>",
      "slug": "example-article"
    },
    ...
  ]
}
```

A consumer can use this endpoint to load and display a list of articles with rudimentary information. The consumer is limited to the data available in this response payload and is forced to download all of it even if they decide they don’t want to use it. For example, the UI might decide it doesn’t actually want to display the publication date.

If the consumer decides they need additional information, an API design decision needs to be made about how that will actually work. Say we want to add the author and some tags to every article in this response. There are several options for implementing this but they all have pros and cons that need to be carefully considered:

### Option 1: Attach the related data to the existing response

This is the most common way to solve this problem. You expand your API to include the author and tags for articles so that each entry looks like this:

```json
{
  "title": "Example Article",
  "published": "2022-05-18T09:24:18.536Z",
  "body": "<p>This article is about...</p>",
  "author": {
    "name": "Mr Author",
    "photo": "https://some.s3bucket.com/mr-author.png"
  },
  "tags": ["example", "featured"]
}
```

Pros:

- The data is available to the consumer and can be accessed with minimal effort.

Cons:

- The data is forced on consumers that don’t actually need it, increasing the total response size for no added value.
- In the case of a relational database, the server must always execute a more complex query that does a few additional joins to the authors and tags tables. This increases the requirements for computing resources for the database and negatively affects the TTFB for every consumer.

### Option 2: You create additional endpoints to provide the related data

Another approach is to create new endpoints to provide the additional data, which the consumer can optionally make requests to as needed. As a bare minimum, the existing JSON response needs to include new reference data, such as entity IDs, to determine what related data to actually load, e.g.

```json
{
  "title": "Example Article",
  "published": "2022-05-18T09:24:18.536Z",
  "body": "<p>This article is about...</p>",
  "authorId": 6,
  "tagIds": [1, 3]
}
```

The `authorId` field can be used to make a `GET` request to `authors/:id`, which will return details about the author matching that ID. An additional call will need to be made for each of the tags, to a `tags/:id` endpoint. These endpoints will probably need to support bulk requests, where multiple IDs can be provided, to reduce the number of requests that need to be made for a complete list of articles.

Pros:

- Consumers can be selective about what data they load.
- The API is more granular which increases flexibility for future consumers that may only care about certain smaller buckets of data.

Cons:

- Consumers are still loading more data than they need if they don’t care about authors or tags.
- Additional SQL joins are still required to load the IDs of the related data.
- Consumers need to manually reconcile related data, implement their own bulk loading logic and ideally set their own caching strategy for repeat requests to the same related entity (i.e. the HTTP request to load an author with the ID 1 should only be called at most 1 time even if that author is attached to dozens of articles in a response list).

### Option 3: Manually implement inclusions and exclusions

A more advanced technique is for your API to allow consumers to specify inclusions and exclusions for the response. There are some standards that parts of the community have adopted for this functionality. There are [frameworks](https://fractal.thephpleague.com/) designed to help with the implementation. Despite this, I personally consider this kind of functionality nonstandard and inconsistent. An example of how I have seen this implemented is by specifying the inclusions and exclusions in the querystring, e.g.

```
GET /articles?limit=10&include=author,tags
                       ^^^^^^^^^^^^^^^^^^^
```

The API will have some logic that parses the include string and adds the necessary related data to the response.

Pros:

- Consumers are able to specify what data they actually want, at least at the related entity level.

Cons:

- Engineers working on the API need to create and maintain their own complex logic for parsing the `include` directive and deciding how to defer the loading of many related entities (e.g. the authors) based on whether the consumer wants them.
- The complexity scales with the amount and the depth of relationships you want to support.
- The endpoint ultimately controls its own supported inclusions and exclusions, which means no other endpoints or entities exposed by those endpoints benefit from it. For example, the article endpoint might be able to include authors but the author endpoint won’t let you load the articles that those authors own unless that is explicitly defined as a supported include (or implemented using one of the above options).

> 💡 These solutions can work for different teams and applications, however, they all start to fall apart as the amount of data your service cares about grows. None of them scale well for an API that needs to provide hundreds or thousands of different data points.

## How GraphQL Helps

As mentioned previously, GraphQL focuses on allowing the developer to declare entities, their fields, and the relationship between them. The query planner maps requests down to the relevant resolvers defined by the application, which in this case are not in the context of a single entry point as seen with REST (in the form of an endpoint) but instead just belong to one complete graph.

Instead of an `/articles` endpoint, we define an `articles` resolver. This resolver can take arguments (such as the limit and offset for the query) and will return `Article` entities:

```graphql
query {
  articles(limit: 10) {
    title
    slug
  }
}
```

This query would respond with something like:

```json
{
  "data": {
    "articles": [
      {
        "title": "Example Article",
        "slug": "example-article"
      }
    ],
    ...
  }
}
```

We can already see that omitting unnecessary data from the response is possible out of the box. We are just returning the title and slug of each article here, maybe for a very simple list of article titles that link to the actual article itself. This lets consumers keep the payload sizes as small as possible.

When it comes to the `author` and `tags` for articles, these can be declared as additional fields that belong to the `Article` entity. These fields can define their own fetching implementation using a field resolver, which might look like this:

```typescript
@ResolveField(() => Author)
public async author(@Root() article: Article): Promise<Author> {
  return this.authorRepository.findOne(article.authorId);
}
```

> 💡 The eagle-eyed reader will spot the N+1 problem that this creates by triggering a separate query for every article in the result list and scoff at the thought of this being a reasonable solution. This will be addressed later in this article.

If the query from the consumer includes the `author` field, this resolver is invoked to fetch the data for that field. Since this field loads another entity, `Author`, any fields and field resolvers that belong to that author are available directly within the query tree. Say you wanted to build an interface that showed the most popular 3 articles for an author on rollover and those authors were attached to an article list. The query could be the following with a simple additional resolver:

```graphql
query {
  articles(limit: 10) {
    title
    slug
    author {
      name
      photo
      popularArticles(limit: 3) {
        title
        slug
      }
    }
  }
}
```

We can help the consumer optimize their interaction with the graph further by adding a custom directive for an author’s photo. The directive will allow the consumer to specify a desired `width` and `height` for the photo that is returned:

```graphql
query {
  author(id: 6) {
    name
    photo @transform(width: 36, height: 36)
  }
}
```

---

## Scalability & Collaboration

Consumers being able to pick and choose what data they want and in what structure out of the box with minimal effort from backend engineering is very powerful. GraphQL services can provide much more flexibility in far less time when compared to a REST service. With that said, the really exciting stuff for me personally is the scalability potential of GraphQL.

Using a [federated graph](https://www.apollographql.com/docs/federation/), you can break your graph down into many smaller subgraphs that merge to become the complete picture.

> Apollo Federation is a powerful open-source architecture that helps you create a unified supergraph that combines multiple GraphQL APIs.

This introduces some considerable benefits:

1. Subgraphs can be their own projects and deployments with their own scaling parameters, resources, infrastructure requirements, runtime and framework versions and so on.
2. Each subgraph can be looked after independently by completely separate teams in your company. A large organisation with many engineering teams can combine their work into one unified API without needing to interact with each other’s work directly or pile everything into a single monolithic project.

Since federation allows you to extend any part of the final graph within your subgraph, existing entities can be expanded with new fields that are owned by your team’s domain without needing to touch those entities in the code owned by another team directly. For example, say your team is presented with this situation:

- There is a separate team responsible for the examples given in this article earlier — resolvers that provide news articles, authors and tags.
- Your team must create some new functionality that can attach products to these articles. Consumers need to be able to request information about the products so that they can be shown underneath the article (or whatever other hypothetical requirements you can think of).

With REST, you probably end up following the pattern described in _option 2_ above. Your team will create a new service with endpoints to retrieve the list of products associated with a particular article ID. Not only do consumers need to do multiple calls to get this data, your service and the news service now live in different locations (e.g. `news.api.yourcompany.com` and `products.api.yourcompany.com`) and probably diverge slightly here and there on how they actually work, how to authenticate with them and so on.

With GraphQL, your team can just create a new subgraph. That subgraph can orphan the `Article` entity from the news subgraph and add additional field resolvers to it, which will be merged with any other `Article` field resolvers defined by any other subgraph. This way, consumers can just make a request like this to get the article and the products that are attached to it:

```graphql
query {
  article(slug: "example-article") {
    title
    published
    body
    products {
      name
      link
      photo @transform(width: 120, height: 120)
      price
    }
  }
}
```

Your service can manage its own data storage to map article IDs to products and fully controls the implementation of that part of the graph. If later a consumer wants to do the inverse and show all of the articles related to a product, that is trivial to implement and can live in the same codebase as well.

This scales up to unlimited entities, fields and relationships across any number of teams. Consumers get to stick to one endpoint and expect a consistent experience.

---

## Gotchas

Everything comes with downsides and gotchas, and GraphQL is of course no exception. Based on my personal experience, these are a few things to keep an eye on if you’re considering building a project with GraphQL:

### It’s Transport Agnostic

The first gotcha to wrap your head around is that GraphQL is _transport agnostic_. What this means in a practical sense is that you can’t rely on HTTP status codes to infer problems when calling a GraphQL service as you would with a REST-based one. HTTP based GraphQL requests that result in errors will still return a 200 OK but include an `errors` field in the response, e.g.

```json
{
  "data": null,
  "errors": [ ... ]
}
```

Some things you need to be mindful of here are:

- It’s common in logging and monitoring tools to group responses by HTTP status code to get an idea of how many errors are being given to consumers, usually with a focus on 5xx errors indicating a problem with the service itself. This isn’t viable in the case of GraphQL, so alternative monitoring strategies will be required.
- Using traditional XHR clients like [`axios`](https://github.com/axios/axios) won’t catch these errors out of the box as they would with a REST endpoint that issues non-2xx responses. Consumers either need additional logic or opt to use a client specifically made for talking to GraphQL servers, such as [`graphql-request`](https://github.com/prisma-labs/graphql-request).

### Performance

Something that can be done easily in a REST endpoint is performance and resource optimisation. The data structure is always the same and you know what relationships need to be traversed to provide that data. You can fetch everything you need in a single SQL query and add the appropriate indexes to your tables to fulfil that query very efficiently. You can typically cache at the response level, especially for endpoints that serve data that doesn’t change very often.

Getting performance right can be much more complicated in GraphQL. Consider the N+1 issue demonstrated earlier in this article. A consumer can load a list of up to 100 articles and each of those articles has an author. In the proposed implementation, every article in that list will trigger an additional query to fetch the related author. This results in 101 total SQL queries, which will not scale for production use. Developers working on a GraphQL backend need to get very comfortable and familiar with batch loading. Whether this is loading from a database, an internal microservice over HTTP or anything else, GraphQL needs to be able to batch load related entities to scale properly. For this problem I have used [`dataloader`](https://github.com/graphql/dataloader), which is a library that broadly works like this:

1. The developer declares a data loader. Data loaders accept an array of keys, such as entity IDs, and must return an array of the same number of related entities in the same order. The data loader is responsible for calling the service, database, or whatever type of provider is available for the data it should return.
2. GraphQL resolvers look to the data loader rather than to the storage or service directly.
3. The Node runtime will aggregate all of the requests to load an entity from a data loader into one call with the IDs from all of those requests, and then correctly dispense the results from the returned array.

Using the author example, we would have a data loader that looks something like this:

```typescript
const loader = new DataLoader(async (ids: readonly number[]) => {
  const authors = await authorRepository.findByIds(ids);

  return ids.map((id) => authors.find((author) => author.id === id));
});
```

And the field resolver for an author that belongs to an article would look like this:

```typescript
@ResolveField(() => Author)
public async author(@Root() article: Article): Promise<Author> {
  return this.authorLoader.load(article.authorId);
}
```

For a GraphQL query that loads 100 articles with their author data attached, we now execute just 2 SQL queries that look something like this:

```sql
SELECT ... FROM articles LIMIT 100
SELECT ... FROM authors WHERE id IN (...)
```

This is the tip of the iceberg when it comes to optimising a GraphQL service but it’s very rewarding to get right, especially once you pull off great performance for queries that touch multiple databases, microservices and even third-party services all at once.

### New Attack Vectors

GraphQL can be exploited in ways that a REST service can’t and it’s important to be aware of this sooner rather than later. A classic example is the ability to [DoS a naive GraphQL server](https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html#dos-prevention) straight out of the box. Say your graph has a circular relationship — articles have authors and authors own articles. Your graph allows consumers to access these relationships from either direction. In this case, a consumer can write an infinitely nested query like this:

```graphql
query {
  articles(limit:10) {
    author {
      articles(limit:10) {
        author {
          articles(limit:10) {
            author { ... }
          }
        }
      }
    }
  }
}
```

Which can trigger thousands of SQL queries for a poor implementation. The graph doesn’t really even need to provide any sophisticated relationships like this at all, since aliases can be used to hit the same resolver as many times as the consumer needs. For example:

```graphql
query {
  list1: articles(offset: 1, limit: 10) { title }
  list2: articles(offset: 2, limit: 10) { title }
  list3: articles(offset: 3, limit: 10) { title }
  ...
}
```

Implementing query complexity limits is the standard way to prevent these attacks, but that is something that needs to be manually implemented by the developer, typically using a [plugin](https://nexusjs.org/docs/plugins/query-complexity).

### It’s Overkill for Small Projects

The tone of this entire article paints a bad image of REST, but in truth, it is a more sensible architecture for smaller projects. There is no need to introduce GraphQL for a small dataset or to replace a dozen or fewer endpoints. GraphQL helps grow huge APIs that need to be contributed to by multiple teams and used by many consumers. Our GraphQL server actually sits in front of several REST-based microservices that own and provide certain domain-specific data. If you are building a small API that will serve one or two clients — use REST instead.

## Wrap Up

GraphQL has become my favourite technology to work with across my 12+ year career so far. I would recommend it to any organisation looking to build a large API since it can easily scale with the team and the requirements of the business. The main caveat is that you need more experienced developers to execute it well since a deeper understanding of performance tuning and schema design is required.
