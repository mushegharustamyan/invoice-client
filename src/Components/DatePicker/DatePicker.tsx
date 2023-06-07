import { useDispatch } from "react-redux";

import { DateInput } from "../DateInput/DateInput";
import { resetDates} from "../../store/reducers/inVoicesFillterts";

import { ResetIcon } from "@fluentui/react-icons-mdl2";

import styles from "./style.module.css"


export const DatePicker = () => {
  const dispatch = useDispatch()

  const handleResetDates = () => {
    dispatch(resetDates({field: "dates" , data: {startDate: "" , endDate: ""}}))
  }

  return (
    <div className={styles.date}>
      <p className={styles.label}>Select Dates</p>
      <div className={styles.box}>
        <div className={styles.container}>
          <label>From:</label>
          <DateInput field="startDate"/>
        </div>
        <button type="reset" className={styles.reset} onClick={() => handleResetDates()}><ResetIcon /></button>
      </div>
      <div className={styles.container}>
        <label>To:</label>
        <DateInput field="endDate"/>
      </div>
    </div>
  )
};
