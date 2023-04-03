import { IDocument } from "../../utils/types"
import styles from "./styles.module.css"

interface IProps {
  data: IDocument
  columnsCount: number
  columns: string[]
  showDepartment: boolean
  showStatus: boolean
} 

export const InvoiceCard:React.FC<IProps> = ({data , columnsCount, columns, showStatus, showDepartment}) => {
  const {invoiceCode , company , department , status , price} = data  

  let width = 100 / columnsCount + 1

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
          <p style={{width: `${width}%`}}>{invoiceCode}</p>
          <p style={{width: `${width}%`}}>{price}</p>
          <p style={{width: `${width}%`}}>{company}</p>
          {showStatus? <p style={{width: `${width}%`}}>{status}</p>: null}
          {showDepartment? <p style={{width: `${width}%`}}>{department}</p>: null}
          <a href="#" className={styles.details} style={{width: `${width}%`}}>Details</a>
      </div>
    </div> 
  )
}