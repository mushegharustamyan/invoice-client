import React, { MutableRefObject } from "react";
import styles from "./style.module.css"

interface IProps {
  ref?: React.Ref<HTMLInputElement>
}

export const DatePicker:React.FC = ({ref}: IProps) => {

  console.log(ref)
  return (
    <div>
      <input type="date" className={styles.date} ref={ref}/>
    </div>
  )
};
