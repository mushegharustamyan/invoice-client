import { IDocument } from "../../utils/types"
import styles from "./styles.module.css"
import arrow from "../../assets/img/arrow.png"

interface IProps {
  data: IDocument
  showStatus?: boolean
} 

export const DocumentCard:React.FC<IProps> = ({data, showStatus}) => {
  let rowData:any[] = []
  let columnWidth = 0

  if(showStatus) {
    rowData = Object.entries(data).filter((value) => value[0] !== "id")
  } else {
    rowData = Object.entries(data).filter((value) => value[0] !== "id" && value[0] !== "status")
  }

  columnWidth = 100 / (rowData.length + 1)

  return (
    rowData.length? <div className={styles.card}>
      <div className={styles.wrapper}>
          {
            rowData.map((value , index) => <p key={index} style={{width: `${columnWidth}%`}}>{value[1]}</p>)
          }
          <a href="#" className={styles.details} style={{width: `${columnWidth}%`}}>Details</a>
      </div>
    </div> : <p>There are no Invoices</p>
  )
}