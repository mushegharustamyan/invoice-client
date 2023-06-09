import { useDispatch } from "react-redux"

import { changeDates} from "../../store/reducers/inVoicesFillterts"

import styles from "./style.module.css"

interface IProps {
  field: string
}

export const DateInput = ({field}: IProps) => {
  const dispatch = useDispatch()

  const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => { 
    dispatch(changeDates({field , data: e.target.value}))
  }

  return <input type="date"  className={styles.input} onChange={(e) => changeDate(e)}/>
}