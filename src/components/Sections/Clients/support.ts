import { Bodies, Body } from 'matter-js';

export function makeBoundaries(width: number, height: number): Body[] {
  const thickness = 30;

  return [
    Bodies.rectangle(width / 2, height + thickness / 2, width, thickness, {
      isStatic: true,
    }),
    Bodies.rectangle(-(thickness / 2), height / 2, thickness, height, {
      isStatic: true,
    }),
    Bodies.rectangle(width + thickness / 2, height / 2, thickness, height, {
      isStatic: true,
    }),
  ];
}
