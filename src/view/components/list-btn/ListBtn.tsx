import React from 'react';
// @ts-ignore
import styles from './ListBtn.module.less';
import { PropsType } from './interface';

export const ListBtn:React.FC<PropsType> = ({ handler }) => (
  <div className={ styles['display'] } onClick={ handler }>
    <span>Creating a board</span>
  </div>
);