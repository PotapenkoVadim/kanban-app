import React, { MouseEvent } from 'react';
import { observer } from 'mobx-react';
// @ts-ignore
import styles from './ListBoardComponent.module.less';
import { PropsType, StateType } from './interface';
import { BoardItem } from '../../components/board-item/BoardItem';

export const ListBoardComponent = observer(class extends React.Component<PropsType, StateType> {
  constructor (props:PropsType) {
    super (props);
  }

  clickHandler = ( e:MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const {toggleTaskDisplay, toggleBoardClick} = this.props.store;
    toggleTaskDisplay(target.dataset.id!);
    toggleBoardClick(false);
  };
  
  render() {
    if (!this.props.store.boards.length) return null;
    return (
      <div className={ `${styles['display']} ${!this.props.store.openTaskDisplay && styles['onDisplay']}` }>
        {
          this.props.store.boards.map(v => (
            <BoardItem key={ v!.id } board={{ title:v!.title, id:v!.id }} handler={ this.clickHandler } />
          ))
        }
      </div>
    );
  }
});