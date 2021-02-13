import React from 'react';
// @ts-ignore
import styles from './ColumnBtn.module.less';
import { PropsType } from './interface';

export const ColumnBtn:React.FC<PropsType> = ({ handlerClick }) => (
  <div className={ styles['display'] } onClick={ handlerClick }>
    <span>Add a column</span>
  </div>
);