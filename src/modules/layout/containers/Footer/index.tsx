import Logo from '@modules/common/components/logo';
import Socials from '@modules/common/components/Socials';
import messages from '@helpers/messages';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.container}>
      <Logo />
      <p className={s.title}>{messages.FUND_TITLE}</p>
      <Socials />
    </footer>
  );
};

export default Footer;
