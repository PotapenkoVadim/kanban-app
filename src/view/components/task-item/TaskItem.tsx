import React from 'react';
// @ts-ignore
import styles from './TaskItem.module.less';
import { PropsType } from './interface';

export const TaskItem:React.FC<PropsType> = ({ title }) => (
  <div className={ styles['display'] }>
    <input type='checkbox' />
    <span>{ title }</span>
  </div>
);