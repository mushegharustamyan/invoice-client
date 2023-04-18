import React, { ChangeEvent , useState } from "react"
import { Input } from "../TextInput/TextInput"
import styles from "./styles.module.css"
import { DatePicker } from "../DatePicker/DatePicker"
import { Button } from "../Button/Button"
import { useDispatch } from "react-redux"
import { getInvoices } from "../../store/reducers/invoiceSlice"

interface IProps {
  icon: string,
  startDate : string
  endDate: string
  changeStartDate: (e: React.ChangeEvent<HTMLInputElement>) => void
  changeEndDate: (e: React.ChangeEvent<HTMLInputElement>) => void
  resetDates: (e: React.MouseEvent<HTMLInputElement>) => void
}

export const SearchPanel = ({icon , startDate , endDate , changeEndDate , changeStartDate, resetDates} : IProps) => {
  const dispatch = useDispatch()

  const [showFilters , setShowFilters] = useState(false)

  const handleDropDown = () => {
    setShowFilters(!showFilters)
  }

  const searchInvoice = () => {
    dispatch(getInvoices({action:{ payload: {dates: {startDate , endDate}}}}))
  }

  return <div className={styles.panel}>
    <div className={styles.head}>
      <div className={styles.search_line}>
        <Input width={600} text="Search"/>
        <Button width={150} action={searchInvoice} text="Search"/>
      </div>
      <div className={styles.filters}>
          <p>Filters</p>
          <img src={icon} className={showFilters ? styles.icon : styles.icon_open} onClick={() => handleDropDown()}/>
      </div>
    </div>
        {
            showFilters? 
            <div className={styles.filters_container}>
              <form className={styles.dates}>
                <DatePicker changeEndDate={changeEndDate} changeStartDate={changeStartDate} resetDates={resetDates}/>
              </form>
            </div> 
            : null
        }
  </div>
}