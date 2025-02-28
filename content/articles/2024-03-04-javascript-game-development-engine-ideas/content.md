Game development marks the beginning of my software development career, with several years in my early teens spent in the now discontinued Flash where I managed to release a small handful of games. Though I quickly progressed to web development with PHP, I was quite passionate about ActionScript 3, as demonstrated by my [StackOverflow ranking in the AS3 tag](https://stackoverflow.com/tags/actionscript-3/topusers), and do miss working on games as a hobby, even more than 15 years later.

Unfortunately, the scope of a game development project is far too large and involves too many skills that I simply don't have anymore and would need to invest time developing, which is much more difficult now as a parent working full time than it was as a high-school student. These include things like designing and working with sprites, animation, pulling together sound effects that work together, basic story-writing, actually designing a fun gameplay mechanics and so on. The only skill I have built in my career that would be relevant for developing a game is programming, which is actually only a small component of pulling a game together.

With all that said, I do think I could add value in the community by developing _tooling_ for games, specifically games developed in TypeScript for the browser. I've had many ideas in this space over the years and looking at the landscape of frameworks and libraries for game development that's out there for JavaScript currently, I think there is a lot I could offer and quite a few gaps I could fill.

## Basic Requirements

To build a game effectively, you need a lot of different tools working together to provide not just a complete experience but one that can be easily extended. Using Unity as an example, the software has everything included for working with 2D and 3D graphics, animations using several options (sprite sheets, bones), sounds and sound editing, managing game scenes, composable objects, setting up physics and collisions, setting up networking, the ability to develop custom scripts and so on. The editor itself is also extensible so that teams can build tooling _for_ Unity that is specifically tailored for a given project and so that the community can develop and share powerful extensions for other developers to use in their game projects.

## Current JavaScript Landscape

The go-to _framework_ for building games with JavaScript appears to be [Phaser](https://phaser.io), which has been the case for quite some time now. I haven't personally developed anything meaningful with Phaser, but skimming through the documentation and playing with the basics tells me that the fundamentals are covered and the developer experience is "ok-ish". Keep in mind that Phaser is just the framework component and has no first-party association with any UI based tooling that helps developers with other parts of the development experience that I could see, such as even a partially featured editor for placing objects into a scene. There seems to be a third party solution for this, [Phaser Editor 2D](https://phasereditor2d.com/), but I didn't have a good experience with it when I tried it out.

### Independent Components

- **2D Graphics**: The most popular library for working with 2D graphics in JavaScript is [Pixi.js](https://www.pixijs.com), which is also an option for the rendering engine for Phaser. It's a very mature, feature-rich library and is used in many other projects outside of game development. It provides a very straightforward API that is easy to learn.
- **3D Graphics**: The most popular library for working with 3D graphics in JavaScript is [Three.js](https://threejs.org), though I personally don't have much experience working in 3D space.
- **Physics**: There are a few libraries for working with physics in JavaScript. The one I have had the best results with is [Matter.js](https://brm.io/matter-js/). It's a 2D physics engine that can be used with Phaser as one of the supported options.
- **Sound**: [Howler.js](https://howlerjs.com/) is a good quality library for working with music and sound effects.

### More Feature-Rich Solutions

[Construct 3](https://www.construct.net/en/make-games/games-editor) is a more complete solution for building JavaScript based games. The caveats are that it's quite expensive (AUD$210/year) and a fully closed-source solution. The development experience appears to be highly opinionated and depends on a bit of a learning curve to get used to the way it works.

Overall my impression is that the JavaScript game development ecosystem is quite immature and lacking a holistic solution for building games. It's likely this is because JavaScript games are unlikely to make adequate revenue when compared to a game produced with a more powerful industry standard engine like Unity and shipped cross-platform.

---

## How I Might Design My Own Engine

If I were to try design and build my own engine, my focus would be on getting the core _fundamentals nailed down_ and then opening up the tooling and the engine itself for maximum extensibility, so that I can lean on the community to build high quality components.

### High-Level Architecture

Broadly the three main parts of the project would be:

1. The engine itself, which will handle running the actual game. This will deal with the game update loop, executing custom component code, rendering, etc.
2. The editor. This will be a web-based UI that allows the developer to do a lot of the things you would expect from something like e.g. the Unity editor. Things like setting up scenes, adding game objects to them and components to those objects. Managing assets and being able to save and load project state.
3. A development server that would run locally on the developer's machine, connecting local components, assets and state (such as the scene) with the hosted editor interface. The editor client would access this server on `localhost:xxxx` to load content from your machine.

Rough diagram, with a focus on the development server that ties everything together:

![Engine Diagram](https://storage.martywallace.com/blog/engine-1.png)

This raises the barrier to entry slightly (as the developer needs to setup and run a server locally) but the overall DX gains once setup would be considerable as you get a dedicated communication channel between the tooling and the developer.

### Engine Architecture

The engine itself broadly has the following components:

- The overarching **game client**. This is what manages things like user input, loading assets (such as sprites, sound files, etc), loading and unloading scenes created with the editor and so on.
- The **game world**. This is responsible for your game objects and how they interact with each other. This is where you put things like game graphics, collision detection, play sound effects and everything of that nature. This really holds the "meat" of a playable game.
- **Game objects**. These are the building blocks for a game world. Much like Unity game objects, these simply have a 2D position within their parent world out of the box but brought to life using components. These are hierarchical, meaning they can be nested within each other for relative positioning, etc.
- **Components**. These encapsulate ideally a single piece of functionality or feature that can be attached to an object within a world (such as a sprite) or an entire game world (such as a physics engine). Components are also how developers will attach custom behaviour to their game objects, much like Unity's `MonoBehaviour` class. For example, the entrypoint to coding a player type game object would be a component such as a `PlayerController` that could manage the player's health, inventory, weapons and so on.

Expressed visually:

![Engine Architecture](https://storage.martywallace.com/blog/engine-2.png)

The engine will provide an API for components and objects to interact with each other. For example, a `ZombieController` component might look up a player object and move towards it, dealing damage when within range:

```typescript
class ZombieController implements Component<WorldObject> {
  @Attribute({
    defaultValue: 0.03,
    type: () => Float,
    description: 'How fast this Zombie will move.',
  })
  public speed!: number;

  @Attribute({
    defaultValue: 1,
    type: () => Int,
  })
  public damage!: number;

  public onUpdate(update: Update): void {
    // Reference the player object in the world.
    const player = this.owner.world.getObjectByName('player');

    // How far to move based on update details.
    const distance = update.delta * this.speed;

    // Move towards the player each update.
    this.position.x += Math.cos(this.position.x - player.position.x) * distance;
    this.position.y += Math.sin(this.position.y - player.position.y) * distance;

    if (this.position.distanceTo(player.position) < 50) {
      // Start applying damage to the player.
      player.getComponent<PlayerController>('controller').health -= this.damage;
    }
  }
}
```

The `@Attribute` decorator would expose an editable field when inspecting the component using the editor. The attribute `type` can point to inbuilt, custom or third-party data types that give different treatment within the editor UI (such as a number picker, ability to reference other objects on the scene, etc). The local development server would be responsible for providing this metadata to the UI.

### Editor

The editor would be a React based UI that talks to a central backend for managing user accounts, projects and other metadata as well as the local development server for loading in the developer's code, assets and scenes. It will be extendable based on attribute types and components so that developers can build component suites that ship with a fine-tuned editor experience.

The main thing it needs to do a good job of is:

- Placement and management of objects in a scene.
- Management and customisation of components attached to those objects. Some examples:
  - Rotation and resizing of graphics such as sprites.
  - Physics body configuration such as vertex arrangement.
  - Setting specific values for `@Attribute`s in custom components.
- Basic asset manipulation (i.e. converting a sprite sheet into frames for animations & setting up animations).
- Saving and loading scene state both locally and to the cloud (the cloud will add versioning etc whereas the local state will be current).
- Creation of blueprints ("prefabs" in Unity). These are pre-made objects with a certain configuration of components that can be easily created and added to the scene both with the UI or in-code at runtime.
- Ability to "run" and "pause" the scene for quick iteration. Ideally with the ability to modify objects and components in the paused state.

## Supplementary Elements

Some things I haven't thought about very deeply yet are the elements that will need thought and work down the line. Some that come to mind are:

- Configurable new project boilerplate with optimal bundling setup. This isn't a space I have a whole lot of experience in outside of the most basic webpack or esbuild setups.
- All the documentation, tutorials and guides so developers can actually pick this up.
- How versioning will work seamlessly factoring in the development server, the editor and the engine.
- It could be nice to offer managed asset hosting.
- Server APIs for things like managed achievements and player profiles.

...and probably infinite other small things as they come up.

---

Whether this is something I ever make a start on or an attempt at is probably unlikely, but documenting my thoughts here at least gives me a place to reflect on if I have some free development time in the future.
