import { FC, useState } from 'react';
import cn from 'classnames';

import s from './CardFrame.module.scss';

const CardFrame: FC<{
  width: number;
  height: number;
  title: string;
}> = ({ width, height, children, title }) => {
  const [isBackSide, setIsBackSide] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsBackSide(true)}
      onMouseLeave={() => setIsBackSide(false)}
      className={cn(s.container, isBackSide && s.backSide)}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {isBackSide ? children : <h4 className={s.title}>{title}</h4>}
    </div>
  );
};

export default CardFrame;
