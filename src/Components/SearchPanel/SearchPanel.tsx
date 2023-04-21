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
import down from "../../assets/img/down-icon-blue.png"

export const SearchPanel = () => {
  const dispatch = useDispatch()

  const [showFilters , setShowFilters] = useState(false)

  const handleDropDown = () => {
    setShowFilters(!showFilters)
  }

  // const searchInvoice = () => {
  //   dispatch(getInvoices({action:{ payload: {dates: {startDate , endDate}}}}))
  // }

  const data = useSelector<RootState>(state => state.invoiceReducer.data) as IDocument[]
  const companies = data.map((value) => {
    return value.company
  })

  const optionsSet = new Set()

  companies.forEach((value) => {
    optionsSet.add(value)
  })

  const fillterations = useSelector<RootState>(state => state.invoiceFilltersReducer)
  console.log(fillterations)

  const selectOptions = Array.from(optionsSet) as string[]

  return <div className={styles.panel}>
    <div className={styles.head}>
      <div className={styles.search_line}>
        <Input width={600} text="Search"/>
        {/* <Button width={150} action={searchInvoice} text="Search"/> */}
      </div>
      <div className={styles.filters}>
          <p>Filters</p>
          <img src={down} className={showFilters ? styles.icon : styles.icon_open} onClick={() => handleDropDown()}/>
      </div>
    </div>
        {
            showFilters? 
            <div className={styles.filters_container}>
              <form className={styles.dates}>
                <DatePicker />
              </form> 
            </div> 
            : null
        }
      
  </div>
}