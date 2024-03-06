import Image from 'next/image';

type Props = {
  readonly name: string;
  readonly logo: string;
  readonly website: string;
};

export default function Client({ name, logo, website }: Props) {
  return (
    <article className="border rounded-md border-gray-800 shadow-lg hover:-top-1 hover:border-gray-700 top-0 relative transition-all duration-150 ease-in-out">
      <a
        className="p-3 flex items-center space-x-3"
        href={`//${website}`}
        target="_black"
        rel="noopener noreferrer"
      >
        <figure className="w-12 h-12 relative overflow-hidden rounded-md shadow-lg flex-shrink-0">
          <Image
            src={logo}
            alt=""
            width={120}
            height={120}
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="flex-grow leading-snug">
          <h5 className="font-bold text-gray-300">{name}</h5>
          <div className="text-xs text-gray-500">{website}</div>
        </div>
      </a>
    </article>
  );
}
