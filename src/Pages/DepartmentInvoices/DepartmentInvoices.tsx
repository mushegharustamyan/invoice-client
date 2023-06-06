import { useEffect , useState} from "react"
import { useDispatch, useSelector } from "react-redux"

import { IDocument, IRawData } from "../../utils/types"
import { RootState } from "../.."

import { getInvoices } from "../../store/reducers/invoiceSlice"

import { SearchPanel } from "../../Components/SearchPanel/SearchPanel"
import { Table } from "../../Components/Table/Table"
import { SignOut } from "../../Components/SignOut/SignOut"
import { EditInvoice } from "../../Components/EditInvoice/EditInvoice"

import styles from "./styles.module.css"

interface IProps {
  title: string
  columns: IRawData[]
  filterBy?: string[]
  showInvoiceActions?: boolean 
}

export const DepartmentInvoicesPage = ({title , columns , filterBy , showInvoiceActions}: IProps) => {
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
          <SearchPanel showFilterIcon={true}/>
        </div>
        <Table 
          data={data} 
          columns={columns}
          roleBasedRender={true} 
          showInvoiceActions={showInvoiceActions}
        />
        {showInvoiceActions && <EditInvoice />}
      </div>
    </div>
  )
}