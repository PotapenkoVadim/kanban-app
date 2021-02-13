import React, { ChangeEvent } from 'react';
// @ts-ignore
import styles from './ColumnItem.module.less';
import { PropsType, StateType } from './interface';
import { TaskItem } from '../../components/task-item/TaskItem';

export class ColumnItem extends React.Component<PropsType, StateType> {
  state:StateType = {
    inputValue: ''
  }

  changeHandler = ( event:ChangeEvent<HTMLInputElement> ):void => {
    const {name, value} = event.target;
    this.setState( prev => ({ ...prev, [name]: value }));
  }

  render () {
    return (
      <div className={ styles['display'] }>
        <span>{ this.props.column.title }</span>
        <input type='text' value={ this.state.inputValue } name='inputValue' onChange={ this.changeHandler } />
        <div className={ styles['task-list'] }>
          {
            this.props.column.tasks?.map(v => <TaskItem key={ v!.id } title={ v!.title } />)
          }
        </div>
      </div>
    );
  }
}