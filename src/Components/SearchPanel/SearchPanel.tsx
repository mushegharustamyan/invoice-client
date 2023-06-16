import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { IDocument } from "../../utils/types"
import { RootState } from "../.."

import { Input } from "../TextInput/TextInput"
import { DatePicker } from "../DatePicker/DatePicker"
import { Button } from "../Button/Button"

import { filterInvoices } from "../../store/reducers/invoiceSlice"

import { FilterIcon, SearchIcon } from "@fluentui/react-icons-mdl2"

import styles from "./styles.module.css"
import { AmountRange } from "../AmountRange/AmountRange"

interface IProps {
  showFilterIcon: boolean
}

export const SearchPanel = ({showFilterIcon}: IProps) => {
  const dispatch = useDispatch()

  const [showFilters , setShowFilters] = useState(false)
  const [activeIcon , setActiveIcon] = useState(false)

  const handleActiveIcon = () => {
    setActiveIcon(!activeIcon)
  }

  const handleDropDown = () => {
    setShowFilters(!showFilters)
  }

  const filters = useSelector<RootState>(state => state.invoiceFilltersReducer)

  const searchInvoice = () => {
    dispatch(filterInvoices(filters))
  }

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
          <Input width={600} text=
          {
            <div className={styles.search}>
              <SearchIcon />
            </div>
          } placeholder="Search"/>
          {
            showFilterIcon && <div className={styles.filters} onMouseEnter={() => handleActiveIcon()} onMouseLeave={() => handleActiveIcon()} onClick={() => handleDropDown()} >
              <p>Filters</p>
              <FilterIcon className={styles.icon} style={{color: `${!activeIcon ? "#2b579a" : "#fff"}`}}/>
            </div>
          }
          <Button width={150} action={searchInvoice} text="Search"/>
        </div>
      </div>
      {
      showFilters? <> 
          <div className={styles.filters_container}>
            <DatePicker />
            <AmountRange />
          </div> 
        </>
        : null
      }
    </div>
   
  </>
}