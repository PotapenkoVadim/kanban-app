import { appStore } from "store/appStore";

export type PropsType = {
  store:appStore
};
export type StateType = {
  x:string
  y:string
  inputValue:string
  showClone:boolean
  titleClone:string
  deleteTask:{}
};