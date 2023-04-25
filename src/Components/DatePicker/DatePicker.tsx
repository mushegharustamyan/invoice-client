import styles from "./style.module.css"
import { DateInput } from "../DateInput/DateInput";
import React from "react";
import { useDispatch } from "react-redux";
import { resetDates} from "../../store/reducers/inVoicesFillterts";
import { ResetIcon } from "@fluentui/react-icons-mdl2";


export const DatePicker = () => {
  const dispatch = useDispatch()

  const handleResetDates = () => {
    dispatch(resetDates({field: "dates" , data: {startDate: "" , endDate: ""}}))
  }

  return (
    <div className={styles.date}>
      <DateInput field="startDate"/>
      <DateInput field="endDate"/>
      {/* <input type="reset" value="Reset"  className={styles.reset} onClick={() => handleResetDates()}/> */}
      <button type="reset" className={styles.reset}><ResetIcon /></button>
    </div>
  )
};
