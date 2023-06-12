import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { IDocument, IRawData } from "../../utils/types"
import { RootState } from "../.."

import { SearchPanel } from "../../Components/SearchPanel/SearchPanel"
import { Table } from "../../Components/Table/Table"

import { getInvoices } from "../../store/reducers/invoiceSlice"

import styles from "./styles.module.css"

interface IProps {
  title: string
  columns: IRawData[]
  filterBy?: string[]
}

export const InvoicesPage = ({title , columns , filterBy}: IProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInvoices({action:{ payload: {fields: {filterBy}}}}))
  } , [])

  useEffect(() => {
    dispatch(getInvoices({action:{ payload: {fields: filterBy}}}))
  } , [title])

  const data = useSelector<RootState>(state => state.invoiceReducer.data) as IDocument[]

  const invoiceFillters = useSelector<RootState>(state => state.invoiceFilltersReducer)

  console.log(invoiceFillters)

  return (
    <div className={styles.cards}>
      <div className={styles.wrapper}>
        <p className={styles.page_title}>{title}</p>
        <div className={styles.panel}>
          <SearchPanel showFilterIcon={true}/>
        </div>
        <Table 
          data={data} 
          columns={columns}
          roleBasedRender={true} 
        />
      </div>
    </div>
  )
}