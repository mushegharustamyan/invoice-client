import { IDocument } from "../../utils/types"
import { Card } from "../Card/Card"
import styles from "./styles.module.css"

interface IProps {
  columns: string[]
  data: IDocument[]
  showStatus: boolean
  showDepartment: boolean
}

export const Layout = ({columns , data , showDepartment , showStatus}: IProps) => {
  let columnWidth = 100 / columns.length + 1;

  return <div className={styles.layout}>
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div className={styles.head_wrapper}>
          {
            columns.map((value) => <p style={{width: `${columnWidth}%`}}>{value}</p>)
          }
          <p style={{width: `${columnWidth}%`}}></p>
        </div>
      </div>
      {
        data[0]? <div className={styles.body}>
        {
          data.map((value) => {
            return <Card data={value} columnsCount={columns.length} showDepartment={showDepartment} showStatus={showStatus}/>
          })
        }
      </div> : <p className={styles.message}>There is no Invoices</p>
      }
    </div>
  </div>
}