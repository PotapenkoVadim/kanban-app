import React from 'react';
// @ts-ignore
import styles from './ListInputPanel.module.less';
import { PropsType } from './interface';

export const ListInputPanel:React.FC<PropsType> = ({
  clickHandler,
  changeHandler,
  createHandler,
  pressEnter,
  value
}) => (
  <div className={ styles['display'] }>
    <span className={ styles['title'] }>Creating a board</span>
    <div className={ styles['input-display'] }>
      <span>What shall we call the board?</span>
      <input
        onChange={ changeHandler }
        onKeyPress={ pressEnter }
        name='inputValue'
        value={ value }
        type='text'
      />
      <div>
        <button onClick={ createHandler } className={ styles['create-btn'] }>Create</button>
        <button onClick={ clickHandler }>Cancel</button>
      </div>
    </div>
  </div>
);