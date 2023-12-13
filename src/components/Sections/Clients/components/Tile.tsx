type Props = {
  readonly title: string;
  readonly transform: {
    readonly x: number;
    readonly y: number;
    readonly rotation: number;
  };
};

export const WIDTH = 160;
export const HEIGHT = 120;

export default function Tile({ title, transform }: Props) {
  const x = transform.x - WIDTH / 2;
  const y = transform.y - HEIGHT / 2;

  return (
    <article
      style={{
        transform: `translate3d(${x}px, ${y}px, 0) rotate(${transform.rotation}rad)`,
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
      }}
      className="absolute z-10 rounded-sm p-5 flex items-center bg-gray-800 hover:bg-gray-700 cursor-pointer border border-gray-700"
    >
      <div className="w-full text-center">
        <h4 className="font-bold">{title}</h4>
      </div>
    </article>
  );
}
