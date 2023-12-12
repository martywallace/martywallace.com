import { faStar } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

type Props = {
  readonly name: string;
  readonly core?: boolean;
};

const theme = (core?: boolean) =>
  classNames('flex items-center px-4 py-2 text-sm rounded-sm shadow-md', {
    'bg-amber-500 text-gray-900': core,
    'bg-gray-800': !core,
  });

const Skill = ({ name, core }: Props) => {
  return (
    <div className={theme(core)}>
      {core && <FontAwesomeIcon className="text-xs mr-1" icon={faStar} />}{' '}
      {name}
    </div>
  );
};

export default Skill;
