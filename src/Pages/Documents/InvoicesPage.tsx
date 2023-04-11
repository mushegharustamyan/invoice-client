import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { IDocument, IRawData } from "../../utils/types"

import { SearchPanel } from "../../Components/SearchPanel/SearchPanel"

import { filterInvoices, getInvoices } from "../../store/reducers/invoiceSlice"
import { RootState } from "../.."

import styles from "./styles.module.css"
import down from "../../assets/img/down-icon-blue.png"
import { Layout } from "../../Components/Layout/Layout"

interface IProps {
  title: string
  columns: IRawData[]
  filterBy?: string[]
}

export const InvoicesPage = ({title , columns , filterBy}: IProps) => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getInvoices())

    if(filterBy) {
      dispatch(filterInvoices({action:{ payload: filterBy}}))
    }
  } , [])

  let data = useSelector<RootState>(state => state.invoiceReducer.data) as IDocument[]

  return (
    <div className={styles.cards}>
      <div className={styles.wrapper}>
        <p className={styles.page_title}>{title}</p>
        <div className={styles.panel}>
          <SearchPanel  icon={down}/>
        </div>
        <Layout data={data} columns={columns}/>
      </div>
    </div>
  )
}