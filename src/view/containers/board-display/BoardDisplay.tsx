import React, { ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { observer } from 'mobx-react';
// @ts-ignore
import styles from './BoardDisplay.module.less';
import { PropsType, StateType } from './interface';
import { ColumnBtn } from '../../components/column-btn/ColumnBtn';
import { ColumnItem } from '../column-item/ColumnItem';
import { ColumnInputPanel } from '../../components/column-input-panel/ColumnInputPanel';
import { TaskItem as CloneTask } from '../../components/task-item/TaskItem';

export const BoardDisplay = observer(class extends React.Component<PropsType, StateType> {
  state:StateType = {
    x: '0', y: '0',
    inputValue: '',
    titleClone: '',
    showClone: false,
    deleteTask: {}
  };
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
      this.setState({ inputValue: '' });
    }
  }
  
  deleteBoard = ( e:MouseEvent<HTMLElement> ):void => {
    const target = e.target as HTMLElement;
    this.props.store.deleteBoard(target.dataset.id!);
  }

  onEnterPress = ( e:KeyboardEvent<HTMLInputElement> ):void => {
    if (e.key === 'Enter' && this.state.inputValue) this.setColumnTitle();
  }

  handlerMousemove = ( e:MouseEvent<HTMLInputElement> ):void => {
    if (this.props.store.openTaskDisplay) {
      let x = e.clientX + 'px';
      let y = e.clientY - 100 + 'px';
      this.setState( prev => ({ ...prev, x, y }))
    }
  }

  grabTask = ( e:MouseEvent<HTMLInputElement>, boardId:string, columnId:string ):void => {
    const target = e.target as HTMLElement;
    const deleteTask = {boardId, columnId, taskId: target.dataset.task}
    this.props.store.deleteTask(boardId, columnId, target.dataset.task!);
    this.setState( prev => ({
      ...prev,
      showClone: true,
      titleClone: target.dataset.title!,
      deleteTask,
    }));
  }

  ungrabTask = ( e:Event ):void => {
    const target = e.target as HTMLElement;
    const {iscolumn, board, column} = target.dataset;
    if (iscolumn && this.state.showClone)
      this.props.store.addTask(board!, column!, this.state.titleClone);
    this.setState( prev => ({ ...prev, showClone: false, titleClone: '', deleteTask:{} }));
  }

  componentDidMount () {
    document.addEventListener('mouseup', this.ungrabTask)
  }

  componentWillUnmount () {
    document.removeEventListener('mouseup', this.ungrabTask)
  }
  
  render () {
    const {openTaskDisplay, boards} = this.props.store;
    const board = boards.filter( v => v!.id === openTaskDisplay)
    return (
      <div
        className={ `${styles['display']}
        ${this.props.store.openTaskDisplay && styles['onDisplay']}` } onMouseMove={ this.handlerMousemove }>
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
                  grabTask={ this.grabTask }
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
                pressEnter={ this.onEnterPress }
              />
              : <ColumnBtn handlerClick={ this.openColumnCreating } />
          }
        </div>

        <CloneTask
          showClone={ this.state.showClone }
          x={ this.state.x }
          title={ this.state.titleClone }
          y={ this.state.y}
          isClone={true}
        />
      </div>
    );
  }
});