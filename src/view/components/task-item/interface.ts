import { MouseEvent } from "react";

export type PropsType = {
  title:string
  isClone?:boolean
  showClone?:boolean
  x?:string
  y?:string
  task?:string
  grabTask?:( e:MouseEvent<HTMLInputElement> )=>void
}