import { useMediaQuery } from '@modules/common/hooks';
import CardFrame from '@modules/common/components/cardFrame';

import { ADDRESS, CURRENT_ACCOUNT, MOBILE_BP, OWNER, TAX_CODE } from '@helpers/const';
import messages from '@helpers/messages';

import HISTORY_PIC from 'src/assets/images/about-fund-hand.png';

import s from './Home.module.scss';

const Home = () => {
  const isMobile = useMediaQuery(MOBILE_BP);
  return (
    <>
      <article className={s.intro}>
        <h1 className={s[`intro-title`]}>{messages.HELP_FOR_ALL}</h1>
        <h2 className={s[`intro-desc`]}>{messages.OUR_GOAL}</h2>
      </article>

      <article className={s.goal}>
        <h2 className={s[`goal-title`]}>{messages.LIFE_BEFORE_WAR}</h2>
      </article>

      <article className={s.history}>
        <div className={s[`history-frame`]}>
          <img src={HISTORY_PIC} alt={messages.CREATED_FUND + messages.IMAGE} />
        </div>
        <div className={s[`history-info`]}>
          <h3 className={s[`history-title`]}>{messages.CREATED_FUND}</h3>
          <p>{messages.CREATED_FUND_DESC}</p>
        </div>
      </article>

      <article className={s.about}>
        <div className={s[`about-info`]}>
          <h3 className={s[`about-title`]}>{messages.FUND_NOT_COMMERCIAL}</h3>
          <p>{messages.FUND_NOT_COMMERCIAL_DESC}</p>
        </div>

        <section className={s.cards}>
          <CardFrame
            width={isMobile ? 320 : 410}
            height={isMobile ? 250 : 300}
            title={messages.JUSTICE_DATA}
          >
            <article className={s.frameContainer}>
              <h5>{messages.LEGAL_TITLE}</h5>
              <dl>
                <dd>{messages.TAX_CODE_TITLE}</dd>
                <dt>{TAX_CODE}</dt>

                <dd>{messages.ADDRESS}</dd>
                <dt>{ADDRESS}</dt>

                <dd>{messages.OWNER}</dd>
                <dt>{OWNER}</dt>
              </dl>
            </article>
          </CardFrame>

          <CardFrame
            width={isMobile ? 320 : 410}
            height={isMobile ? 250 : 300}
            title={messages.CURRENT_ACCOUNT}
          >
            <article className={s.frameContainer}>
              <h5>{messages.LEGAL_TITLE}</h5>
              <dl>
                <dd>{messages.CURRENT_ACCOUNT}</dd>
                <dt>{CURRENT_ACCOUNT}</dt>
              </dl>
            </article>
          </CardFrame>
        </section>
      </article>
    </>
  );
};

export default Home;
