import messages from '@helpers/messages';
import s from './Home.module.scss';

const Home = () => {
  return (
    <>
      <article className={s.firstScreen}>
        <h1 className={s[`firstScreen-title`]}>{messages.HELP_FOR_ALL}</h1>
        <h2 className={s[`firstScreen-desc`]}>{messages.OUR_GOAL}</h2>
      </article>

      <article className={s.aboutFund}>
        <h2 className={s[`aboutFund-title`]}>{messages.LIFE_BEFORE_WAR}</h2>
      </article>

      <article className={s.historyFund}>
        <div>
          <h3 className={s[`aboutFund-title`]}>{messages.CREATED_FUND}</h3>
          <p className={s[`aboutFund-desc`]}>{messages.CREATED_FUND_DESC}</p>
        </div>
      </article>
    </>
  );
};

export default Home;
