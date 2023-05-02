import React, { useState } from "react"
import { Input } from "../TextInput/TextInput"
import styles from "./styles.module.css"
import { DatePicker } from "../DatePicker/DatePicker"
import { Button } from "../Button/Button"
import { useDispatch, useSelector } from "react-redux"
import { filterInvoices, getInvoices } from "../../store/reducers/invoiceSlice"
import { Select } from "../Select/Select"
import { RootState } from "../.."
import { IDocument } from "../../utils/types"
import { ChevronDownIcon, FilterIcon, SearchIcon } from "@fluentui/react-icons-mdl2"

export const SearchPanel = () => {
  const dispatch = useDispatch()

  const [showFilters , setShowFilters] = useState(false)

  const handleDropDown = () => {
    setShowFilters(!showFilters)
  }

  const filters = useSelector<RootState>(state => state.invoiceFilltersReducer)

  const searchInvoice = () => {
    dispatch(filterInvoices(filters))
  }

  const invoiceFilters = useSelector<RootState>(state => state.invoiceFilltersReducer.filterBy)

  console.log(invoiceFilters)

  const data = useSelector<RootState>(state => state.invoiceReducer.data) as IDocument[]
  const companies = data.map((value) => {
    return value.company
  })

  const optionsSet = new Set()

  companies.forEach((value) => {
    optionsSet.add(value)
  })

  return <>
    <div className={styles.panel}>
      <div className={styles.head}>
        <div className={styles.search_line}>
          <Input width={600} text="Search" render={() => <SearchIcon />}/>
          <div className={styles.filters}>
            <p>Filters</p>
            <FilterIcon onClick={() => handleDropDown()} className={styles.icon} style={{color: "#2b579a"}}/>
          </div>
          <Button width={150} action={searchInvoice} text="Search"/>
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
   
  </>
}