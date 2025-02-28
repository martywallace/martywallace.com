A quick summary of what tech I'll be using in 2024 based on existing experience and upcoming projects.

## Languages

- **TypeScript** will remain by bread-and-butter language of choice for as many tasks as possible. This is the language I enjoy using the most and covers the most ground, usable from the backend through to the frontend.
- **PHP** I would consider a secondary skill at this point since I rarely have to engage with it, but it's still important enough to maintain a baseline level of competence in both for my work and some of the off-the-shelf solutions I use. PHP 8 has introduced enough significant changes to rekindle my interest, but I still find Node applications much easier to develop and maintain.
- **SQL** is a necessary skill I would suggest _anyone_ that has time get some level of experience with. Although I tend to use ORMs often in actual code, being able to write, analyse, debug and optimise SQL is essential especially for maintaining a good level of performance in backend services.
- **TSX** I consider a "language" independent of HTML as it blends HTML and TypeScript and requires a small layer of additional skill-set to blend them competently. This is important obviously for working with React.
- **Bash** is important for writing small scripts, especially within CICD pipelines.

## Content Management

Though most of the work I do is bespoke builds, a good quality CMS is still necessary for building more traditional websites or basic applications that can lay down most of the groundwork like authentication, media uploads, text changes and so on.

### Craft CMS

I have been using [Craft CMS](https://craftcms.com) for close to 10 years. I have tried other solutions over the years ranging from fully open-source options like [Strapi](https://strapi.io) through to SaaS offerings like [Contentful](https://contentful.com), but have found Craft to be the best balance of maturity and extensibility. Since launching its headless mode and GraphQL API, it pairs perfectly with the popular Next.js framework for building websites and applications.

#### Positives

- Open source.
- Straightforward to set up and configure.
- The documentation is well maintained and high quality.
- Well-supported with a stable and consistent contribution history. The team is really passionate about their product and can be found on their very own [Stack Exchange](https://craftcms.stackexchange.com/) instance as well as in GitHub threads and their Discord channel.
- Large and active community. Lots of high quality plugins.
- Simple to teach clients to use to manage their website or application.
- Relatively straightforward to customise and extend.

#### Negatives

- This is a PHP based product, so maintaining some level of PHP experience is required. This is mostly a problem if you are used to working 100% with TypeScript/JavaScript as there are options that fit into that skill-set like Strapi.
- It's built on [Yii](https://www.yiiframework.com/) which I personally find to be one of the weaker PHP framework choices on the market. The Craft documentation tends to palm you off to their documentation for more complex tasks which can be a bit frustrating.
- Requires payment for more than one user account and a few other features.
- The pricing model around annual updates is a bit odd. The free "Solo" edition allows you to update forever while the paid tiers lock you out of updates unless you continue to pay annually.
- Extending the control panel feels like going back in time a little bit with the combination of [Twig](https://twig.symfony.com/) and some quite dated JavaScript to pull everything together. A React-based interface (or even Vue) would be a welcome change.

## Runtimes

### Node.js

I have a long history writing JavaScript for Node and will continue this as my primary runtime target. This is simply by far the most stable and mature runtime for backend JavaScript services. The main downside that comes to mind with Node is the baseline resource demands are quite high, which can make it more expensive than other options to scale horizontally.

### Deno

I have a close eye on [Deno](https://deno.com) and would be interested in giving it a try for small use-cases as it approaches a level of maturity I am comfortable with. Some of the features around developer experience like native TypeScript are very appealing.

### Cloudflare Workers

[Cloudflare Workers](https://workers.cloudflare.com) are something we use quite a bit at my job that offer a lot of value quickly and easily. As they sit right near the beginning of the sequence of layers that a request to your domain passes through, they make for a great place to handle things like token validation, request rewriting and so on. They also get programmatic access to the Cloudflare cache as well as other storage like [KV](https://developers.cloudflare.com/kv/), [Durable Objects](https://developers.cloudflare.com/durable-objects/) and [R2](https://www.cloudflare.com/en-au/developer-platform/r2/).

## Frameworks

### Nest.js

I have been using [Nest.js](https://nestjs.com) for over 5 years. It is an excellent framework for setting up a Node.js application - I haven't found anything really comparable in terms of maturity and functionality written for Node. It provides a modular architecture which both lets you design your application in a clean modular way but also enables the community to create and ship their own open source modules, of which there are many high quality choices available.

#### Positives

- Very well documented.
- Large community and lots of modules to choose from, including many first-party ones for things like configuration, task scheduling, integration with Apollo GraphQL and TypeORM, customised unit testing capabilities, and so on.
- Enables clean application design.
- Well-designed dependency injection architecture.
- Good developer experience. Includes CLI for scaffolding, running the application in "dev" mode with hot reloading and more.
- Good synergy with a lot of other solutions.

#### Negatives

- You can land in dependency hell quite easily trying to bump Nest.js along with third party tools and Nest modules that bridge the two things together. I have had situations where I wanted to upgrade something like Apollo, which required me to bump the `@nestjs/graphql` modules, which required me to bump Nest.js core components, which then broke other modules.
- It is quite an opinionated framework, which can be a turn-off for some developers.

### Next.js

[Next.js](https://nextjs.org) (named annoying close to Nest.js) is the current industry standard for building React applications that need both client and server-side functionality working together out of the box, among a tonne of other features provided by the framework. This is my go-to for most client work as it covers a lot of ground, is well documented and is easy to find additional contributors with experience as needed (if I need to hand over th project, get sick, overburdened and on a deadline, etc).

#### Positives

- Very strong community.
- High quality documentation.
- Very strong developer experience especially when paired with Vercel for deployment. You can set up a deployment from a GitHub repo to Vercel with a few clicks to get work in front of a client or coworker.
- Trivial to find other developers to onboard into a project.
- ISR and SSG out of the box are excellent pathways to improving the performance of a site with a lot of static or infrequently changing content. These also take the burden away from your backend, which allows you to be much more conservative with resources and save a lot on hosting.

#### Negatives

- There can be a bit of a learning curve especially around some more complex elements like how the data cache works. This can catch people off-guard if they aren't paying close attention to how they've setup their `fetch()` calls and whatnot. Less experienced developers will also have a hard time understanding where the line is between what happens on the backend vs the frontend and when.
- Version jumps can be quite complex to navigate as Vercel are innovating and iterating rapidly.

### React

This is self-explanatory. React is simply the best overall choice factoring in community, adoption, resources, developer experience and more. I actually started my journey with frontend frameworks using [Vue.js](https://vuejs.org/), but the DX for React, especially combined with TypeScript, is just too much of an improvement to ignore.

### TailwindCSS

Writing CSS is one of my _least_ favourite parts of web development. I spent many years working with [SASS](https://sass-lang.com/), and it never grew on me. I have been using [Tailwind](https://tailwindcss.com/) exclusively for a few years now and only have good things to say about it. Keep in mind, I am much more of a backend developer than a frontend one, so a lot of the concerns that the community has with Tailwind aren't fully relevant to me. In almost all cases I just need to build very standard interfaces for internal tooling and typical websites, which Tailwind can do no problem.

#### Positives

- Great documentation.
- It's great if you hate writing styles like I do. You can 100% stay in your HTML/TSX code. I've done this across dozens of projects with _no need_ to write any custom CSS.
- The community is enormous and produces a lot of supplementary resources like [Tailwind Components](https://tailwindcomponents.com/) where you can grab code from 100's of examples that will "just work" as they don't depend on any custom CSS.
- Great developer experience with things like IDE plugins with intellisense on your theme setup.
- Consistent, straightforward way to configure a theme for your app using the Tailwind [configuration](https://tailwindcss.com/docs/configuration).
- Very easy to find extra developers to help on a project as adoption is widespread and the learning curve is small.

#### Negatives

- Involves "learning" the framework which means a lot of memorising class prefixes, which ones combine correctly, etc.
- Lock-in. Once you've built a project on this it would be _very_ difficult to move away from it.

### Apollo GraphQL

I have been using [Apollo](https://www.apollographql.com/) in combination with Nest.js for around 4 years to add GraphQL functionality to backend services. It has been the leader in JavaScript based graph implementation for a long while, though I have had my eye on solutions like [Hive](https://the-guild.dev/graphql/hive) for a while now as well. We use Apollo Federation at my workplace which enables seamless collaboration across teams by allowing each team to own their own distinct part of the overall graph.

#### Positives

- Very mature product that provides the ideal GraphQL implementation.
- Large community with a lot of support to integrate with other frameworks like Nest.js.
- Federation is a really great way to scale up your graph as more teams are contributing.

#### Negatives

- They have been pushing developers quite aggressively into their enterprise plan. Teams looking to use Federation will find that their open source `@apollo/gateway` has been all but abandoned in favour of their Rust-based [router](https://www.apollographql.com/docs/router/), which comes with a lot of features and functionality [locked behind an enterprise agreement](https://www.apollographql.com/docs/router/enterprise-features).

## Libraries

### ORM: Prisma

I have been using [Prisma](https://prisma.io) for approx 18 months with _mostly_ good results. It is a very mature ORM with a strong roadmap and many supplementary features and tools. The stand-outs for me personally are the tooling (such as managing migrations) and type safety features. I have had some trouble with the connection pooling under load and their binary target configuration being a bit of a challenge to get right across environments in some cases. Prior to Prisma I was using [TypeORM](https://typeorm.io/) which is also an excellent solution and in some ways better than Prisma, especially when it comes to the underlying SQL that is actually executed.

#### Positives

- Strong type safety. ORM operations return a properly typed result that is aware of which related objects were retrieved in the query (e.g. it knows if you selected an `author` for each `article`) and adds it to the type for that query result.
- High quality tooling to handle migrations, manage schema, pull schema from an existing database and more.

#### Negatives

- Prisma ships with its own engine built in Rust that deals with a lot of the communication between your Node application and the database. This is fine _in theory_, but it has caused a few headaches in my experience. I have noticed some unusual stuff like the engine preferring many consecutive queries that could normally be fulfilled with a `JOIN`.
- I've found myself fighting with the inbuilt [connection pooling](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections/connection-pool) system more than once. Basically under load an application will start failing queries to the database due to no available connections. Using `pgbouncer` doesn't really seem to help. Scaling up the application _a lot_ typically fixes the problem but is very uneconomical. I do not experience an equivalent problem with something like TypeORM.

### Honourable Mentions

- [`clsx`](https://www.npmjs.com/package/clsx) - Class string building, combines well with Tailwind.
- [`dataloader`](https://www.npmjs.com/package/dataloader) - Used for batching requests for data, very useful within GraphQL to avoid N+1 queries.
- [`date-fns`](https://www.npmjs.com/package/date-fns) - For working with dates, especially formatting them for presentation.
- [`puppeteer`](https://www.npmjs.com/package/puppeteer) - I mostly use this for scraping and rendering PDFs.

## Infrastructure

### Cloud Provider: Digital Ocean

I have used [Digital Ocean](https://www.digitalocean.com/) for personal and freelance projects for over 8 years. Obviously it is much less feature rich than AWS, but the tradeoff is that it is simpler to use and maintain, which is important when I am the sole developer across many projects. Their PaaS solution, [App Platform](https://www.digitalocean.com/products/app-platform), has been great for me to be able to offload infrastructure management to them for client work.

For complex projects I still factor in and consider the features of AWS, but I haven't personally needed something of that complexity yet in client project.

### Cloud Provider: Vercel

I started using [Vercel](https://vercel.com/) to deploy Next.js applications recently and have really enjoyed the experience and offering. This is a space I will focus on growing my experience and skill-set this year.

### Database: PostgreSQL

Postgres remains as my favourite RDBMS and preference over similar options when working on a new project.

### Messaging: RabbitMQ

[RabbitMQ](https://www.rabbitmq.com/) is my preferred message broker due to features, simplicity and pricing. It's very affordable to scale with something like [CloudAMQP](https://www.cloudamqp.com/) when compared to the costs of something like [managed Kafka](https://www.digitalocean.com/products/managed-databases-kafka) and the more sophisticated message routing functionality opens up more possibilities in how to design an asynchronous backend. Node based SDKs are more mature and setting up a local RabbitMQ with docker composer is very straightforward.

## Third-Party Tools

- [**DataDog**](https://www.datadoghq.com/) - My preferred logging and observability platform.
- [**SendGrid**](https://sendgrid.com/en-us) - For sending transactional emails. I have used Mandrill in the past, but it feels like their offering has fallen behind quite a lot, especially on the DX side.
- [**GitHub**](https://github.com) - Where I store code and do project management. This is actually a recent change, and I was using [GitLab](https://about.gitlab.com) until around mid last year, but actions has overtaken GitLab CICD and the project management stuff is also really polishing up nicely.
- [**Unleash**](https://getunleash.io) - SaaS and self-hosted feature flagging software.

## Software

- [**DataGrip**](https://www.jetbrains.com/datagrip) - for working with databases. This is by far the best solution on the market (at least that I have encountered). Something like [DBeaver](https://dbeaver.io/) works fine for general use but DataGrip takes the tooling up a few notches.
- [**WebStorm**](https://www.jetbrains.com/webstorm/) - I am a very recent convert to WebStorm from years of Visual Studio Code. The IDE overall feels much more mature and has been more pleasant to use.
- [**PHPStorm**](https://www.jetbrains.com/phpstorm/) - for the small amount of work I need to do with PHP.
- [**Lens**](https://k8slens.dev/) - a great IDE for working with Kubernetes clusters.
- [**Postman**](https://www.postman.com/) - for managing and keeping track of APIs for projects.

---

At a high level this is basically everything I plan to work with this year. Hopefully this is useful for someone looking for new ideas for their own stack or to get an idea of what solutions might work well together for their own projects.
