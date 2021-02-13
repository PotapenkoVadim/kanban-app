import { ChangeEvent } from "react";

export type PropsType = {
  value:string
  changeHandler:( event:ChangeEvent<HTMLInputElement> )=>void
  setColumnTitle:()=>void
  closePanel:()=>boolean
};