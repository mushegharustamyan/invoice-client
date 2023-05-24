import { useEffect , useState} from "react"
import { useDispatch, useSelector } from "react-redux"

import { IDocument, IRawData, IUser } from "../../utils/types"

import { SearchPanel } from "../../Components/SearchPanel/SearchPanel"

import { getInvoices } from "../../store/reducers/invoiceSlice"
import { RootState } from "../.."

import styles from "./styles.module.css"
import { Table } from "../../Components/Table/Table"
import { SignOut } from "../../Components/SignOut/SignOut"

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

  let data = useSelector<RootState>(state => state.invoiceReducer.data) as IDocument[]

  return (
    <div className={styles.cards}>
      <div className={styles.wrapper}>
        <div className={styles.signout}>
          <SignOut />
        </div>
        <p className={styles.page_title}>{title}</p>
        <div className={styles.panel}>
          <SearchPanel />
        </div>
        <Table 
          data={data} 
          columns={columns} 
        />
      </div>
    </div>
  )
}