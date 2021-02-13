import React from 'react';
import './style.less';

import { StoreContext } from './store/StoreContext';
import { AddListComponent } from './view/containers/add-list-component/AddListComponent';
import { ListBoardComponent } from './view/containers/list-board-component/ListBoardComponent';
import { BoardDisplay } from './view/containers/board-display/BoardDisplay';

export class App extends React.Component {
  render () {
    return (
      <div className='container'>
        <StoreContext.Consumer>
          { appStore => (
            <>
              <AddListComponent store={ appStore } />
              <ListBoardComponent store={ appStore } />
              <BoardDisplay store={ appStore } />
            </>
          )}
        </StoreContext.Consumer>
      </div>
    );
  }
};