import s from './CardFrame.module.scss';
import { FC } from 'react';
import cn from 'classnames';

const CardFrame: FC<{
  width: number;
  height: number;
  title: string;
}> = ({ width, height, children, title }) => {
  return (
    <div className={cn(s.container)} style={{ width: `${width}`, height: `${height}` }}>
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
};

export default CardFrame;
