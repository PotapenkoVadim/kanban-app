import React, { MouseEvent, useState } from 'react';
// @ts-ignore
import styles from './TaskItem.module.less';
import { PropsType } from './interface';

export const TaskItem:React.FC<PropsType> = ({
  x,
  y,
  task,
  title,
  grabTask,
  isClone=false,
  showClone=false,
}) => {
  const [hideTask , setHideTask] = useState(false);
  const grabbing = ( e:MouseEvent<HTMLInputElement> ) => {
    if (grabTask) {
      grabTask( e );
      setHideTask(true);
    }
  }
  return (
    <div
      className={ 
        `${isClone ? styles['clone-display'] : styles['display']}
        ${showClone && styles['show-clone']}
        ${hideTask && styles['hide-task']}`
      }
      style={{ left: x || 0, top: y || 0 }}
      onMouseDown={ grabbing }
      data-title={ title }
      data-task={ task }
    >
      {/* <input type='checkbox' /> */}
      <span data-title={ title } data-task={ task }>{ title }</span>
    </div>
  );
}