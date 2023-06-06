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
      <DateInput field="startDate"/>
      <DateInput field="endDate"/>
      <button type="reset" className={styles.reset}><ResetIcon /></button>
    </div>
  )
};
