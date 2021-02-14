import { ChangeEvent, KeyboardEvent } from "react";

export type PropsType = {
  clickHandler:()=>void
  createHandler:()=>void
  changeHandler:( event:ChangeEvent<HTMLInputElement> )=>void
  pressEnter:( e:KeyboardEvent<HTMLInputElement> )=>void
  value:string
}