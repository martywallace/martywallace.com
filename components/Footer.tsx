import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="px-5 py-6 text-type-darkest text-xs text-center">
      <div className="w-full max-w-screen-lg mx-auto">
        <p>
          &copy; Marty Wallace &middot; ABN 24 297 658 841 &middot; Deployed on
          GitLab Pages
        </p>
      </div>
    </footer>
  );
};

export default Footer;
