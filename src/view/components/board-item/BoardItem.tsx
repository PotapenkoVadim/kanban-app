import React from 'react';
// @ts-ignore
import styles from './BoardItem.module.less';
import { PropsType } from './interface';

export const BoardItem:React.FC<PropsType> = ({ board, handler }) => (
  <div data-id={board.id} className={ styles['display'] } onClick={ handler }>
    <span data-id={board.id}>Board: { board.title }</span>
  </div>
);