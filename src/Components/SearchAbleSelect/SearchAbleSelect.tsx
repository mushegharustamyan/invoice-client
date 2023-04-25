import React, { LegacyRef, useEffect, useRef, useState } from "react"
import styles from "./style.module.css"
import down from "../../assets/img/down-icon-blue.png"
import { useDispatch, useSelector } from "react-redux"
import { filterInvoices } from "../../store/reducers/invoiceSlice"
import { changeFilterBy } from "../../store/reducers/inVoicesFillterts"
import { RootState } from "../.."
import { ChevronDownIcon } from "@fluentui/react-icons-mdl2"

interface IProps {
  title: string
  options: string[]
}

export const SearchAbleSelect = ({title , options} : IProps) => {
  const [showOptions , setShowOptions] = useState(false)

  const defaultOptions =  [...options]

  const [localOptions , setLocalOptions] = useState([...options]) 

  const ref = useRef<HTMLInputElement | null>(null)

  const handleShowOptions = (e: React.MouseEvent) => {
    setShowOptions(!showOptions)
    
    console.log(ref.current?.contains(e.target as Node))
  }

  const filterOptions = (e:React.ChangeEvent<HTMLInputElement>) => {
    let newOptions: string[] = localOptions

    if (e.target.value !== "") {
      newOptions = newOptions.filter((value) => {
        return `${value}`.toLocaleLowerCase().includes(e.target.value.toLowerCase())
      })

      setLocalOptions(newOptions)
    } else {
      setLocalOptions(defaultOptions)
    }    
  }

  const filters = useSelector<RootState>(state => state.invoiceFilltersReducer)

  const dispatch = useDispatch()

  const searchInvoices = (field: string , value: string) => {
    dispatch(changeFilterBy({field, value}))
    dispatch(filterInvoices(filters))
  }

  return <div className={styles.select}>
      <div onClick={(e) => handleShowOptions(e)} className={styles.head}>
        <input type="text" onChange={(e) => filterOptions(e)} className={styles.input} placeholder={title} ref={ref}/>
        <ChevronDownIcon onClick={(e) => handleShowOptions(e)} className={showOptions ? styles.icon : styles.icon_open} style={{color: "#2b579a"}}/>
      </div>
      {
        showOptions && <div className={styles.options}>
          <div className={styles.wrapper}>
            <div className={styles.options_list}>
              {
                localOptions.map((value) => <p className={styles.option_item} onClick={() => searchInvoices(title , value)}>{value}</p>)
              }
            </div>
          </div>  
        </div>
      }
  </div>
}