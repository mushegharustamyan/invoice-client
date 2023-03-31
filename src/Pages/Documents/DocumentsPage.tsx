import { useEffect } from "react"
import { useLocation } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../.."
import { DocumentCard } from "../../Components/DocumentCard/DocumentCard"
import { getInvoices } from "../../store/reducers/invoiceSlice"
import { IDocument } from "../../utils/types"
import styles from "./styles.module.css"
import { title } from "process"
import { SearchPanel } from "../../Components/SearchPanel/SearchPanel"

interface IProps {
  title: string
  showStatus?: boolean
}

export const DocumentsPage = ({showStatus, title}: IProps) => {
  const location = useLocation()
  console.log(showStatus)

  const dispatch = useDispatch()
  let rowFields: string[] = [] ;
  let columnWidth:number = 0;

  useEffect(() => {
    dispatch(getInvoices())
  } , [])

  let data = useSelector<RootState>(state => state.invoiceReducer.data) as IDocument[]
  const filterBy = location.pathname.split("/")[2]

  if(data[0]) {
    rowFields = Object.keys(data[0]).filter((value) => value !== "id" && value !== "status")
    columnWidth = 100 / (rowFields.length + 1)
  }
  
  if(showStatus && data[0]) {
    rowFields = Object.keys(data[0]).filter((value) => value !== "id")
  }

  if(filterBy) {
    data = data.filter((value) => value.status === filterBy)
  }

  return (
    <div className={styles.cards}>
      <div className={styles.wrapper}>
        <p className={styles.page_title}>{title}</p>
        <SearchPanel />
        <div className={styles.cards_box}>
          <div className={styles.cards_header}>
            <div className={styles.cards_wrapper}>
              {
                rowFields.map((value , index) => <p key={index} style={{width: `${columnWidth}%`}}>{value}</p>)
              }
              <p style={{width: `${columnWidth}%`}}></p>
            </div>
          </div>
          {data.length ? data.map((value) => {
            return <DocumentCard data={value} key={value.id} showStatus={showStatus}/>
          }): <p>There is no Invoices</p>}
        </div>
      </div>
    </div>
  )
}