import { faStar } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { FC } from 'react';

type Props = {
  readonly name: string;
  readonly core?: boolean;
};

const theme = (core?: boolean) =>
  classNames(
    'flex items-center px-4 py-2 bg-gradient-to-tl text-sm text-white rounded-md shadow-md',
    {
      'from-primary to-primary-darker text-ui': core,
      'from-ui-lightest to-ui-lighter': !core,
    },
  );

const Skill: FC<Props> = ({ name, core }) => {
  return (
    <div className={theme(core)}>
      {core && <FontAwesomeIcon className="text-xs mr-1" icon={faStar} />}{' '}
      {name}
    </div>
  );
};

export default Skill;
