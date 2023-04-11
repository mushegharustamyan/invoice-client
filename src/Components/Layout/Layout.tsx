import { IDocument, IRawData } from "../../utils/types"
import { Card } from "../Card/Card"
import styles from "./styles.module.css"

interface IProps {
  columns: IRawData[]
  data: any[]
}

export const Layout = ({columns , data }: IProps) => {
  let columnWidth = 100 / columns.length + 1;

  const shownData = data.map((val) => {
    return columns.map((value) => {
      return {
        field: value.field,
        data: val[value.field]
      }
    })
  })

  return <div className={styles.layout}>
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div className={styles.head_wrapper}>
          {
            columns.map((value) => <p style={{width: `${columnWidth}%`}}>{value.title}</p>)
          }
          <p style={{width: `${columnWidth}%`}}></p>
        </div>
      </div>
      {
        data[0] ? <div className={styles.body}>
        {
          shownData.map((value) => {
            return <Card data={value} columnsCount={columns.length}/>
          })
        }
      </div> : <p className={styles.message}>There is no Data</p>
      }
    </div>
  </div>
}