import Image from 'next/image';
import clsx from 'clsx';
import MarkdownRenderer from '../../../../components/MarkdownRenderer';

type Props = {
  readonly workplace: string;
  readonly logo?: string;
  readonly timeframe: string;
  readonly children: string;
  readonly last?: boolean;
};

export default function Experience({
  workplace,
  logo,
  timeframe,
  children,
  last = false,
}: Props) {
  return (
    <div className="grid md:grid-cols-4 md:px-12">
      <div
        className={clsx(
          'md:border-r border-gray-700 border-dashed md:pr-10 md:text-right relative',
          {
            'md:pb-14': !last,
          },
        )}
      >
        <div className="flex items-center flex-row-reverse md:flex-row pb-4 md:pb-0">
          <div className="flex-grow leading-tight">
            <h4 className="font-bold">{workplace}</h4>
            <div className="text-sm text-gray-500">{timeframe}</div>
          </div>

          <figure className="mr-4 md:mr-0 md:absolute w-10 h-10 md:right-0 overflow-hidden rounded-md shadow-lg bg-gray-700 transform md:translate-x-1/2">
            {logo && <Image src={logo} alt="" width={48} height={48} />}
          </figure>
        </div>
      </div>
      <div
        className={clsx('md:col-span-3 md:pl-10', {
          'pb-14': !last,
        })}
      >
        <MarkdownRenderer>{children}</MarkdownRenderer>
      </div>
    </div>
  );
}
