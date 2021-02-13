export type BoardsTypes = {
  id:string,
  title:string,
  columns?:Array<ColumnType|null>
}

export type ColumnType = {
  id:string,
  title:string,
  tasks?:Array<TaskType|null>
}

export type TaskType = {
  id:string,
  title:string
}