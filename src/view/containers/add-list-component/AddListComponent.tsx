import React, { ChangeEvent } from 'react';
import { observer } from 'mobx-react';
// @ts-ignore
import styles from './AddListComponent.module.less';
import { PropsType, StateType } from './interface';
import { ListBtn } from '../../components/list-btn/ListBtn';
import { ListInputPanel } from '../../components/list-input-panel/ListInputPanel';

export const AddListComponent = observer(class extends React.Component<PropsType, StateType> {
  constructor (props:PropsType) {
    super (props);
    this.state = {
      inputValue: ''
    }
  }

  clickHandler = ():void => {
    const {toggleBoardClick, isClickedBoardCreating} = this.props.store;
    if (!this.props.store.openTaskDisplay) toggleBoardClick(!isClickedBoardCreating);
  }
  changeHandler = ( event:ChangeEvent<HTMLInputElement> ):void => {
    const {name, value} = event.target;
    this.setState( prev => ({ ...prev, [name]: value}));
  };
  createHandler = ():void => {
    if (this.state.inputValue) {
      this.props.store.addBoard(this.state.inputValue);
      this.setState( prev => ({ ...prev, inputValue: '' }));
    }
  };

  render () {
    return (
      <div className={ styles['display'] }>
        {
          this.props.store.isClickedBoardCreating
            ? <ListInputPanel
              clickHandler={ this.clickHandler }
              changeHandler={ this.changeHandler }
              createHandler={ this.createHandler }
              value={ this.state.inputValue }
            />
            : <ListBtn handler={ this.clickHandler } />
        }
      </div>
    );
  }
});