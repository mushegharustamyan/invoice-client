import styles from "./style.module.css"
import { DateInput } from "../DateInput/DateInput";
import React from "react";
import { useDispatch } from "react-redux";
import { changeFillters } from "../../store/reducers/inVoicesFillterts";


export const DatePicker = () => {
  const dispatch = useDispatch()

  const resetDates = () => {
    dispatch(changeFillters({field: "dates" , data: {startDate: "" , endDate: ""}}))
  }

  return (
    <div className={styles.date}>
      <DateInput field="startDate"/>
      <DateInput field="endDate"/>
      <input type="reset" value="Reset"  className={styles.reset} onClick={() => resetDates()}/>
    </div>
  )
};
