import messages from '@helpers/messages';

import PHONE_ICON from 'src/assets/images/icons/phone.svg';
import LOCATION_ICON from 'src/assets/images/icons/location.svg';
import MAIL_ICON from 'src/assets/images/icons/mail.svg';

import s from './Socials.module.scss';

const Socials = () => {
  return (
    <ul className={s.container}>
      <li>
        <a href="#">
          <img src={MAIL_ICON} alt={messages.SOCIALS_ALT} />
        </a>
      </li>
      <li>
        <a href="/">
          <img src={PHONE_ICON} alt={messages.SOCIALS_ALT} />
        </a>
      </li>
      <li>
        <a href="/">
          <img src={LOCATION_ICON} alt={messages.SOCIALS_ALT} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
