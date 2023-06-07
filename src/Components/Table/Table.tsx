import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import { IAuth, IRawData } from "../../utils/types"
import { RootState } from "../.."

import { Card } from "../Card/Card"
import { Select } from "../Select/Select"

import { modifyColumns, modifyData } from "./adapters"

import { ChevronLeftIcon, ChevronRightIcon } from "@fluentui/react-icons-mdl2"

import styles from "./styles.module.css"

interface IProps {
  columns: IRawData[]
  data: any[]
  roleBasedRender: boolean
  option?: "add" | "modify"
  showInvoiceActions?: boolean
}

export const Table = ({columns , data , roleBasedRender , option , showInvoiceActions}: IProps) => {
  
  const user = useSelector<RootState>(state => state.authReducer) as IAuth
  let columnWidth = 100 / columns.length + 1;

  let shownColumns = roleBasedRender ? modifyColumns(user.role , columns , option) : columns
  let shownData = modifyData(data , shownColumns)

  const [itemsCount , setItemsCount] = useState(4)
  const [pagesCount, setPagesCount] = useState(0)
  const [selectedPage, setSelectedPage] = useState(1)
  let passingData = shownData.slice((selectedPage - 1) * itemsCount ,selectedPage * itemsCount)

  useEffect(() => {
    data.length / itemsCount < 1 ? setPagesCount(1) : setPagesCount(Math.ceil(data.length / itemsCount))
  } , [data , itemsCount])

  const turnNextPage = () => {
    if(selectedPage + 1 <= pagesCount) setSelectedPage(selectedPage + 1)
  }

  const turnPreviousPage = () => {
    if(selectedPage - 1 > 0) setSelectedPage(selectedPage - 1)
  }

  const getPaginationItems = (pagesCount: number) => {
    const arr:number[] = [] 

    for( let i = 1 ; i <= pagesCount ; i++ ) {
      arr.push(i)
    }

    return arr
  }

  const paginationItems = getPaginationItems(pagesCount)

  return <div className={styles.layout}>
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div className={styles.head}>
          <div className={styles.head_wrapper}>
          {
            shownColumns.map((value , index) => {
              // return <p style={{width: `${columnWidth}%`}} key={index}>{value.title}</p>
              return value.render ? <p style={{width: `${columnWidth}%`}} key={index}>{value.render()}</p> : <p style={{width: `${columnWidth}%`}} key={index}>{value.title}</p>
            })
          }
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {
          passingData.map((value , index) => {
            return <Card data={value} columnsCount={shownColumns.length} key={index} showCheckbox={showInvoiceActions}/>
          })
        }
      </div>
      <div className={styles.pagination}>
        <div className={styles.pagination_wrapper}>
          <p>Total Items {data.length}</p>
          <div className={styles.items_count}>
            <div className={styles.pages}>
              <ChevronLeftIcon onClick={() => turnPreviousPage()}/>
              {
                paginationItems.map((value , index , arr) => {
                  if(value <= 2 || value === selectedPage && value !== arr.length) {
                    return <div key={index} className={selectedPage === index + 1 ? styles.selected_page : styles.page} onClick={() => setSelectedPage(value)}>{value}</div>
                  } else if(value <= arr.length){
                    return 
                  }
                })
              }
              {paginationItems.length > 3 ? <p>...</p> : null}
              {
                paginationItems.map((value , index , arr) => {
                  if(value === arr.length && value > 2) {
                    return <div key={index} className={selectedPage === index + 1 ? styles.selected_page : styles.page} onClick={() => setSelectedPage(value)}>{value}</div>
                  } else {
                    return 
                  }
                })
              }
              <ChevronRightIcon onClick={() => turnNextPage()}/>
            </div>
            <p>Items per page</p>
            <Select itemsCount={10} width={50} selected={itemsCount} action={setItemsCount}/>
          </div>
        </div>
      </div>
    </div>
  </div>
}