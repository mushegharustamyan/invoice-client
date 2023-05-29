import { DownloadDocumentIcon } from "@fluentui/react-icons-mdl2";
import { Link } from "react-router-dom";
import { IDocument, IRawData, IUser } from "../../utils/types"
import styles from "./styles.module.css"
import { useSelector } from "react-redux";
import { RootState } from "../..";

interface IProps {
  data: {
    value: string | JSX.Element
  }[]
  columnsCount: number
  last?: true 
  showCheckbox: boolean | undefined
} 

export const Card:React.FC<IProps> = ({data , columnsCount, last , showCheckbox}) => { 
  const user = useSelector<RootState>(state => state.authReducer) as IUser
  let width = 100 / columnsCount + 1 
  return (<div className={styles.card_wrapper}>
    {showCheckbox && <input type="checkbox"/>}
    <div className={!last ? styles.card : styles.last} >
      
      <div className={styles.wrapper}>
          {
            data.map((value , index) => {
              return <div key={index} style={{width:`${width}%`}}>{value.value}</div>
            }) 
          }
      </div>
    </div> 
  </div>
  )
}