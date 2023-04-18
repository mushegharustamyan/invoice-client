import React, { useState } from "react"
import { Input } from "../TextInput/TextInput"
import styles from "./styles.module.css"
import { DatePicker } from "../DatePicker/DatePicker"
import { Button } from "../Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { getInvoices } from "../../store/reducers/invoiceSlice"
import { Select } from "../Select/Select"
import { RootState } from "../.."
import { IDocument } from "../../utils/types"

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

  const data = useSelector<RootState>(state => state.invoiceReducer.data) as IDocument[]
  const companies = data.map((value) => {
    return value.company
  })

  const optionsSet = new Set()

  companies.forEach((value) => {
    optionsSet.add(value)
  })

  const selectOptions = Array.from(optionsSet) as string[]

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