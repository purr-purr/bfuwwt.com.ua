import LOGO from 'src/assets/images/logo.svg';

import s from './Logo.module.scss';
import messages from '@helpers/messages';

const Logo = () => {
  return (
    <a href="/" className={s.container}>
      <img src={LOGO} alt={messages.LOGO_ALT} />
    </a>
  );
};

export default Logo;
