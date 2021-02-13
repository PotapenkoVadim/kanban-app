export type PropsType = {
  board:{[index:string]:string}
  handler:( e:React.MouseEvent<HTMLElement> )=>void
}