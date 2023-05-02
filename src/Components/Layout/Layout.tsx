import { IDocument, IRawData } from "../../utils/types"
import { Card } from "../Card/Card"
import { Select } from "../Select/Select"
import styles from "./styles.module.css"
import { ChevronLeftIcon, ChevronRightIcon } from "@fluentui/react-icons-mdl2"

interface IProps {
  columns: IRawData[]
  data: any[]
  itemsCount : number
  pagesCount : number
  selectedPage: number
  totalInvoices: number
  setItemsCount: (count: number) => void
  setSelectedPage: (page: number) => void
  turnNextPage: () => void
  turnPreviousPage: () => void
}

export const Layout = ({columns , data , itemsCount , pagesCount, selectedPage , totalInvoices, setItemsCount , setSelectedPage, turnNextPage , turnPreviousPage}: IProps) => {
  let columnWidth = 100 / columns.length + 1;

  const shownData = data.map((val) => {
    return columns.map((value) => {
      return {
        field: value.field,
        data: val[value.field]
      }
    })
  })

  const getPaginationItems = (pagesCount: number) => {
    const arr:number[] = [] 

    for( let i = 1 ; i <= pagesCount ; i++ ) {
      arr.push(i)
    }

    return arr
  }

  const paginationItems = getPaginationItems(pagesCount)

  console.log(selectedPage)

  return <div className={styles.layout}>
    <div className={styles.wrapper}>
      <div className={styles.table}>
        <div className={styles.head}>
          <div className={styles.head_wrapper}>
            {
              columns.map((value , index) => {
                if(value.render) {
                  return <p key={index} style={{width: `${columnWidth}%`}}>{value.render()}</p>
                }

                return <p key={index} style={{width: `${columnWidth}%`}}>{value.title}</p>
              })
            }
            <p style={{width: `${columnWidth}%`}}></p>
          </div>
        </div>
        {
          data[0] ? <div className={styles.body}>
          {
            shownData.map((value, index, arr) => {
              if(index === arr.length - 1) {
                return <Card data={value} columnsCount={columns.length} key={index} last={true}/>
              }

              return <Card data={value} columnsCount={columns.length} key={index}/>
            })
          }
          </div> : <p className={styles.message}>There is no Data</p>
        }
      </div>
      <div className={styles.pagination}>
        <div className={styles.pagination_wrapper}>
          <p>Total Invoices {totalInvoices}</p>
          <div className={styles.items_count}>
            <div className={styles.pages}>
              <ChevronLeftIcon onClick={() => turnPreviousPage()}/>
              {
                paginationItems.map((value , index , arr) => {
                  if(value <= 2 || value === selectedPage && value !== arr.length) {
                    return <div className={selectedPage === index + 1 ? styles.selected_page : styles.page} onClick={() => setSelectedPage(value)}>{value}</div>
                  } else if(value <= arr.length){
                    return 
                  }
                })
              }
              {paginationItems.length > 3 ? <p>...</p> : null}
              {
                paginationItems.map((value , index , arr) => {
                  if(value === arr.length && value > 2) {
                    return <div className={selectedPage === index + 1 ? styles.selected_page : styles.page} onClick={() => setSelectedPage(value)}>{value}</div>
                  } else {
                    return 
                  }
                })
              }
              <ChevronRightIcon onClick={() => turnNextPage()}/>
            </div>
            <p>Invoices per page</p>
            <Select itemsCount={10} width={50} selected={itemsCount} action={setItemsCount}/>
          </div>
        </div>
      </div>
    </div>
  </div>
}