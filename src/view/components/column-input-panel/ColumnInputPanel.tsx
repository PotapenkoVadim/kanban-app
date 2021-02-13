import React from 'react';
// @ts-ignore
import styles from './ColumnInputPanel.module.less';
import {PropsType} from './interface';

export const ColumnInputPanel:React.FC<PropsType> = ({
  value,
  changeHandler,
  setColumnTitle,
  closePanel
}) => (
  <div className={ styles['display'] }>
    <input type='text' value={value} name='inputValue' onChange={ changeHandler } />
    <button onClick={ setColumnTitle }>Create</button>
    <span onClick={ closePanel }>&times;</span>
  </div>
);