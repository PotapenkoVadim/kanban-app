import React, { ChangeEvent, KeyboardEvent } from 'react';
import { observer } from 'mobx-react';
// @ts-ignore
import styles from './ColumnItem.module.less';
import { PropsType, StateType } from './interface';
import { TaskItem } from '../../components/task-item/TaskItem';

export const ColumnItem = observer(class extends React.Component<PropsType, StateType> {
  state:StateType = { inputValue: '' }
  changeHandler = ( event:ChangeEvent<HTMLInputElement> ):void => {
    const {name, value} = event.target;
    this.setState( prev => ({ ...prev, [name]: value }));
  }

  onEnterHandler = ( e:KeyboardEvent<HTMLInputElement> ):void => {
    if (e.key === 'Enter' && this.state.inputValue) {
      this.props.addTask( this.props.boardId, this.props.column.id, this.state.inputValue );
      this.setState({ inputValue: '' });
    };
  }

  render () {
    return (
      <div className={ styles['display'] }>
        <span>{ this.props.column.title }</span>
        <input
          type='text'
          value={ this.state.inputValue }
          name='inputValue'
          onChange={ this.changeHandler }
          onKeyPress={ this.onEnterHandler }
        />
        <div className={ styles['task-list'] }>
          {
            this.props.column.tasks?.map(v => <TaskItem key={ v!.id } title={ v!.title } />)
          }
        </div>
      </div>
    );
  }
});