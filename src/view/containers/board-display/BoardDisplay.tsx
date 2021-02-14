import React, { ChangeEvent } from 'react';
import { observer } from 'mobx-react';
// @ts-ignore
import styles from './BoardDisplay.module.less';
import { PropsType, StateType } from './interface';
import { ColumnBtn } from '../../components/column-btn/ColumnBtn';
import { ColumnItem } from '../column-item/ColumnItem';
import { ColumnInputPanel } from '../../components/column-input-panel/ColumnInputPanel';

export const BoardDisplay = observer(class extends React.Component<PropsType, StateType> {
  state:StateType = { inputValue: '' };
  openColumnCreating = ():boolean => this.props.store.toggleColumnClick(true);
  closeColumnCreating = ():boolean => this.props.store.toggleColumnClick(false);
  closeBoardDisplay = ():string|null => this.props.store.toggleTaskDisplay(null);

  handlerChange = ( event:ChangeEvent<HTMLInputElement> ):void => {
    const {name, value} = event.target;
    this.setState( prev => ({ ...prev, [name]:value }));
  }

  setColumnTitle = ():void => {
    if (this.state.inputValue) {
      this.props.store.setColumn(this.state.inputValue);
      this.closeColumnCreating();
    }
  }
  
  deleteBoard = ( e:React.MouseEvent<HTMLElement> ):void => {
    const target = e.target as HTMLElement;
    this.props.store.deleteBoard(target.dataset.id!);
  }
  
  render () {
    const {openTaskDisplay, boards} = this.props.store;
    const board = boards.filter( v => v!.id === openTaskDisplay)
    return (
      <div className={ `${styles['display']} ${this.props.store.openTaskDisplay && styles['onDisplay']}` }>
        <span className={ styles['close'] } onClick={ this.closeBoardDisplay }>Close Board</span>
        <span
          data-id={ board[0] ? board[0]!.id : null }
          className={ styles['delete'] }
          onClick={ this.deleteBoard }
        >
          Delete Board
        </span>
        <h3>Board: { board[0] ? board[0].title : '' }</h3>
        <div>
          {
            openTaskDisplay && board[0]?.columns?.length
              ? board[0]?.columns!.map( v => (
                <ColumnItem
                  key={ v!.id }
                  column={ v! }
                  boardId={ board[0]!.id }
                  addTask={ this.props.store.addTask }
                />
              ))
              : null
          }
          {
            this.props.store.isClickedColumnCreating
              ? <ColumnInputPanel
                value={ this.state.inputValue }
                changeHandler={ this.handlerChange }
                setColumnTitle={ this.setColumnTitle }
                closePanel={ this.closeColumnCreating }
              />
              : <ColumnBtn handlerClick={ this.openColumnCreating } />
          }
        </div>
      </div>
    );
  }
});