import { ChangeEvent } from "react";

export type PropsType = {
  clickHandler:()=>void
  createHandler:()=>void
  changeHandler:( event:ChangeEvent<HTMLInputElement> )=>void
  value:string
}