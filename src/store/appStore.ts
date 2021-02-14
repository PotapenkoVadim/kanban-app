import { observable, makeObservable, action } from 'mobx';
import { BoardsTypes } from './interface';

export class appStore {
  boards:Array<BoardsTypes|null> = [];
  openTaskDisplay:string|null = null;
  isClickedBoardCreating:boolean = false;
  isClickedColumnCreating:boolean = false;

  constructor () {
    makeObservable(this, {
      boards:observable,
      openTaskDisplay:observable,
      isClickedBoardCreating:observable,
      isClickedColumnCreating:observable,
      addBoard:action,
      toggleTaskDisplay:action,
      toggleBoardClick:action,
      toggleColumnClick:action,
      setColumn:action,
      deleteBoard:action,
      addTask:action
    });
  }

  addBoard = ( title:string ):void => {
    this.boards.push({
      title,
      columns:[],
      id: Date.now().toString(),
    });
  };

  toggleTaskDisplay = ( value:string|null ):string|null => this.openTaskDisplay = value;
  toggleBoardClick = ( value:boolean ):boolean => this.isClickedBoardCreating = value;
  toggleColumnClick = ( value:boolean ):boolean => this.isClickedColumnCreating = value;
  setColumn = ( title:string ):void => {
    const newColumn = {
      title,
      tasks:[],
      id: Date.now().toString(),
    }
    this.boards.filter( v => v?.id === this.openTaskDisplay)
      .forEach(v => v?.columns?.push(newColumn));
  }

  deleteBoard = ( id:string ):void => {
    this.boards.forEach( (v, i) => {
      if (v?.id == id) delete this.boards[i];
    });
    this.toggleTaskDisplay(null);
  }

  addTask = ( boardId:string, columnId:string, title:string ):void => {
    const newTask = {
      title,
      id: Date.now().toString(),
    };
    this.boards.forEach( v => {
      if ( v?.id === boardId ) {
        v.columns?.forEach( itm => {
          if (itm?.id === columnId) {
            itm.tasks?.push(newTask)
          }
        })
      }
    });

    console.log(this.boards[0]!.columns[0]?.tasks[0].title)
  };
}