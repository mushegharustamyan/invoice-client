import { useEffect , useState} from "react"
import { useDispatch, useSelector } from "react-redux"

import { IDocument, IRawData } from "../../utils/types"

import { SearchPanel } from "../../Components/SearchPanel/SearchPanel"

import { getInvoices } from "../../store/reducers/invoiceSlice"
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

  console.log(filterBy)
  
  const [startDate , setStartDate] = useState("")
  const [endDate , setEndDate] = useState("")

  const handleChangeStartDate = (e:React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value)
  }
  
  const handleChangeEndDate = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value)
  }

  const handleResetDates = (e:React.MouseEvent<HTMLInputElement>) => {
    setEndDate("")
    setStartDate("")
  }

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
        <p className={styles.page_title}>{title}</p>
        <div className={styles.panel}>
          <SearchPanel  icon={down} startDate={startDate} endDate={endDate} changeEndDate={handleChangeEndDate} changeStartDate={handleChangeStartDate} resetDates={handleResetDates}/>
        </div>
        <Layout data={data} columns={columns}/>
      </div>
    </div>
  )
}