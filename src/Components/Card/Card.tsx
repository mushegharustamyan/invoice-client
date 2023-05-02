import { Link } from "react-router-dom";
import { IDocument, IRawData } from "../../utils/types"
import styles from "./styles.module.css"

interface IProps {
  data: {
    field: string;
    data: any;
  }[]
  columnsCount: number
  last?: true 
} 

export const Card:React.FC<IProps> = ({data , columnsCount, last}) => { 
  let width = 100 / columnsCount + 1
  return (
    <div className={!last ? styles.card : styles.last} >
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