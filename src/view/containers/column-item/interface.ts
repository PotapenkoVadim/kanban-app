import { ColumnType } from "store/interface";

export type PropsType = {
  column:ColumnType
  boardId:string
  addTask:( boardId:string, columnId:string, title:string )=>void
};
export type StateType = {
  inputValue:string
};