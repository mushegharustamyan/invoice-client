import { useEffect , useState} from "react"
import { useDispatch, useSelector } from "react-redux"

import { IDocument, IRawData } from "../../utils/types"

import { SearchPanel } from "../../Components/SearchPanel/SearchPanel"

import { getInvoices } from "../../store/reducers/invoiceSlice"
import { RootState } from "../.."

import styles from "./styles.module.css"
import down from "../../assets/img/down-icon-blue.png"
import { Layout } from "../../Components/Layout/Layout"
import { SearchAbleSelect } from "../../Components/SearchAbleSelect/SearchAbleSelect"
import { BadgeIcon, ChevronDownIcon } from "@fluentui/react-icons-mdl2"

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

  const [itemsCount , setItemsCount] = useState(3)
  const [pagesCount, setPagesCount] = useState(0)
  const [selectedPage, setSelectedPage] = useState(1)
  const passingData = data.slice((selectedPage - 1) * itemsCount ,selectedPage * itemsCount)

  useEffect(() => {
    data.length / itemsCount < 1 ? setPagesCount(1) : setPagesCount(Math.ceil(data.length / itemsCount))
  } , [data , itemsCount])

  console.log(selectedPage)

  const changeItemsCount = (count: number) => {
    setItemsCount(count)
  }

  const changeSelectedPage = (page:number) => {
    setSelectedPage(page)
  }

  const changePagesCount = (count: number) => {
    setPagesCount(count)
  }

  const turnNextPage = () => {
    if(selectedPage + 1 <= pagesCount) setSelectedPage(selectedPage + 1)
  }

  const turnPreviousPage = () => {
    if(selectedPage - 1 > 0) setSelectedPage(selectedPage - 1)
  }

  return (
    <div className={styles.cards}>
      <div className={styles.wrapper}>
        <p className={styles.page_title}>{title}</p>
        <div className={styles.panel}>
          <SearchPanel />
        </div>
        <Layout 
          data={passingData} 
          columns={columns} 
          pagesCount={pagesCount} 
          itemsCount={itemsCount} 
          selectedPage={selectedPage} 
          totalInvoices={data.length}
          setItemsCount={changeItemsCount}
          setSelectedPage={changeSelectedPage}
          turnNextPage={turnNextPage}
          turnPreviousPage={turnPreviousPage}
        />
      </div>
    </div>
  )
}