'use client';

import Tile, { HEIGHT, WIDTH } from './Tile';
import { useCallback, useEffect, useReducer, useState } from 'react';
import {
  Bodies,
  Body,
  Composite,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Runner,
  Vector,
} from 'matter-js';
import { makeBoundaries } from '../support';
import { useMeasure } from '@uidotdev/usehooks';

type Props = {
  readonly clients: readonly {
    readonly title: string;
  }[];
};

type InteractiveTile = {
  readonly body: Body;
  readonly client: Props['clients'][number];
};

const engine = Engine.create({
  gravity: {
    y: 0.25,
  },
});
const runner = Runner.create();

export default function Simulation({ clients }: Props) {
  const [ref, { width, height }] = useMeasure();

  const [bounds, setBounds] = useState<Body[]>([]);

  const [_, update] = useReducer((x) => {
    for (const body of engine.world.bodies) {
      if (body.position.y > window.innerHeight) {
        Body.setPosition(body, Vector.create(window.innerWidth / 2, -200));
        Body.setVelocity(body, Vector.create(0, 0));
        Body.setAngle(body, Math.random() * Math.PI * 2);
      }
    }

    return x + 1;
  }, 0);

  const [tiles, setTiles] = useState<readonly InteractiveTile[]>([]);

  const resetBoundaries = useCallback(() => {
    setBounds((previousBounds) => {
      const newBounds = makeBoundaries(width ?? 0, height ?? 0);

      Composite.remove(engine.world, previousBounds);
      Composite.add(engine.world, newBounds);

      return newBounds;
    });
  }, [width, height]);

  useEffect(() => {
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: Mouse.create(document.querySelector('#simulation')!),
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    mouseConstraint.mouse.element.removeEventListener(
      'mousewheel',
      // @ts-ignore
      mouseConstraint.mouse.mousewheel,
    );
    mouseConstraint.mouse.element.removeEventListener(
      'DOMMouseScroll',
      // @ts-ignore
      mouseConstraint.mouse.mousewheel,
    );

    Composite.add(engine.world, mouseConstraint);

    setTiles(
      clients.map((client) => {
        const body = Bodies.rectangle(window.innerWidth / 2, 0, WIDTH, HEIGHT);

        Body.setAngle(body, Math.random() * Math.PI * 2);

        Body.setPosition(
          body,
          Vector.create(
            WIDTH + Math.random() * (window.innerWidth - WIDTH * 2),
            -200 - Math.random() * 200,
          ),
        );

        Composite.add(engine.world, body);

        return { body, client };
      }),
    );

    Runner.start(runner, engine);
    Events.on(engine, 'afterUpdate', update);

    return () => {
      Runner.stop(runner);
      Events.off(engine, 'afterUpdate', update);

      Composite.remove(engine.world, engine.world.bodies);

      setTiles([]);
    };
  }, [clients, setTiles]);

  useEffect(() => resetBoundaries(), [resetBoundaries]);

  return (
    <div id="simulation" ref={ref} className="absolute inset-0 overflow-hidden">
      {tiles.map(({ client, body }) => (
        <Tile
          key={client.title}
          transform={{
            x: body.position.x,
            y: body.position.y,
            rotation: body.angle,
          }}
          title={client.title}
        />
      ))}
    </div>
  );
}
