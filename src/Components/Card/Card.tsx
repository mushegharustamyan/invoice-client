import { Link } from "react-router-dom";
import { IDocument, IRawData } from "../../utils/types"
import styles from "./styles.module.css"

interface IProps {
  data: {
    field: string;
    data: any;
  }[]
  columnsCount: number
} 

export const Card:React.FC<IProps> = ({data , columnsCount}) => { 
  let width = 100 / columnsCount + 1
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
          {
            data.map((value , index) => {
              return <p key={index} style={{width:`${width}%`}}>{value.data}</p>
            }) 
          }
          <Link to="/" style={{width:`${width}%`}}>Details</Link>
      </div>
    </div> 
  )
}