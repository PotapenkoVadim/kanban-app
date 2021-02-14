import { ChangeEvent, KeyboardEvent } from "react";

export type PropsType = {
  value:string
  changeHandler:( event:ChangeEvent<HTMLInputElement> )=>void
  setColumnTitle:()=>void
  closePanel:()=>boolean
  pressEnter:( e:KeyboardEvent<HTMLInputElement>  )=>void
};