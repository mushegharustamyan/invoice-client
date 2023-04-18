import styles from "./style.module.css"
import { DateInput } from "../DateInput/DateInput";
import React from "react";

interface IProps {
  changeStartDate: (e: React.ChangeEvent<HTMLInputElement>) => void
  changeEndDate: (e: React.ChangeEvent<HTMLInputElement>) => void
  resetDates: (e: React.MouseEvent<HTMLInputElement>) => void
}

export const DatePicker = ({changeStartDate, changeEndDate, resetDates}: IProps) => {

  return (
    <div className={styles.date}>
      <DateInput handleChange={changeStartDate}/>
      <DateInput handleChange={changeEndDate}/>
      <input type="reset" value="Reset" onClick={(e) => resetDates(e)} className={styles.reset}/>
    </div>
  )
};
