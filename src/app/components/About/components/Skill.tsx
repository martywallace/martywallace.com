import { faStar } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

type Props = {
  readonly name: string;
  readonly core?: boolean;
};

const Skill = ({ name, core }: Props) => {
  return (
    <div
      className={clsx(
        'flex items-center px-4 py-2 text-sm rounded-sm shadow-md space-x-2',
        {
          'border border-amber-500 text-gray-200': core,
          'bg-gray-800 text-gray-400': !core,
        },
      )}
    >
      {core && (
        <FontAwesomeIcon className="text-xs text-amber-500" icon={faStar} />
      )}
      <span>{name}</span>
    </div>
  );
};

export default Skill;
