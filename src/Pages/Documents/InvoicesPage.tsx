import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../.."
import { InvoiceCard } from "../../Components/InvoiceCard/InvoiceCard"
import { getInvoices } from "../../store/reducers/invoiceSlice"
import { IDocument } from "../../utils/types"
import styles from "./styles.module.css"
import { SearchPanel } from "../../Components/SearchPanel/SearchPanel"
import { allInvoicesAdapter } from "../../utils/adapters"
import { filter } from "./helper"
import down from "../../assets/img/down-icon-blue.png"
interface IProps {
  title: string
  columns: string[]
  showDepartment: boolean
  showStatus: boolean
  filterBy?: string
}

export const InvoicesPage = ({title , columns , showDepartment , showStatus, filterBy}: IProps) => {
  
  const [showFilters , setShowFilters] = useState(false)

  const handleDropDown = () => {
    setShowFilters(!showFilters)
  }

  const dispatch = useDispatch()
  let columnWidth = 100 / columns.length + 1;
  
  useEffect(() => {
    dispatch(getInvoices())
  } , [])
  
  let data = useSelector<RootState>(state => state.invoiceReducer.data) as IDocument[]
  
  if(filterBy) {
    data = filter(data , filterBy)
  }

  allInvoicesAdapter(data)
  return (
    <div className={styles.cards}>
      <div className={styles.wrapper}>
        <p className={styles.page_title}>{title}</p>
        <div className={styles.panel}>
          <SearchPanel />
          <div className={styles.filters}>
            <p>Filters</p>
            <img src={down} className={showFilters ? styles.icon : styles.icon_open} onClick={() => handleDropDown()}/>
          </div>
        </div>
        {
            showFilters? 
            <div className={styles.filters_container}>
              <div>
                
              </div>
            </div> 
            : null
        }
        <div className={styles.cards_box}>
          <div className={styles.cards_header}>
            <div className={styles.cards_wrapper}>
              {
                columns.map((value , index) => <p className={styles.head} key={index} style={{width: `${columnWidth}%`}}>{value}</p>)
              }
              <p style={{width: `${columnWidth}%`}}></p>
            </div>
          </div>
          {data.length ? data.map((value) => {
            return <InvoiceCard showDepartment={showDepartment} showStatus={showStatus} data={value} key={value.id} columnsCount={columns?.length} columns={columns}/>
          }): <p className={styles.message}>There is no Invoices</p>}
        </div>
      </div>
    </div>
  )
}