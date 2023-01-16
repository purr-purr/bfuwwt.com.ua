import s from './Header.module.scss';
import Logo from '@modules/common/components/logo';
import Socials from '@modules/common/components/Socials';

const Header = () => {
  return (
    <header className={s.container}>
      <Logo />
      <Socials />
    </header>
  );
};

export default Header;
