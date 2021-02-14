import React from 'react';
// @ts-ignore
import styles from './ColumnInputPanel.module.less';
import {PropsType} from './interface';

export const ColumnInputPanel:React.FC<PropsType> = ({
  value,
  changeHandler,
  setColumnTitle,
  closePanel,
  pressEnter
}) => (
  <div className={ styles['display'] }>
    <input
      onChange={ changeHandler }
      onKeyPress={ pressEnter }
      name='inputValue'
      value={value}
      type='text'
    />
    <button onClick={ setColumnTitle }>Create</button>
    <span onClick={ closePanel }>&times;</span>
  </div>
);