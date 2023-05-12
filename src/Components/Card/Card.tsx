import { DownloadDocumentIcon } from "@fluentui/react-icons-mdl2";
import { Link } from "react-router-dom";
import { IDocument, IRawData } from "../../utils/types"
import styles from "./styles.module.css"

interface IProps {
  data: {
    field: string;
    data: any;
    render?: () => JSX.Element
  }[]
  columnsCount: number
  last?: true 
} 

export const Card:React.FC<IProps> = ({data , columnsCount, last }) => { 
  let width = 100 / columnsCount + 1
  return (
    <div className={!last ? styles.card : styles.last} >
      <div className={styles.wrapper}>
          {
            data.map((value , index) => {
              if(value.render) return <p key={index} style={{width:`${width}%`}}>{value.render()}</p>
              console.log(value)
              return <p key={index} style={{width:`${width}%`}}>{value.data}</p>
            }) 
          }
          {/* <div style={{width:`${width}%`, display: "flex", gap: "10px", alignItems: "center", cursor: "pointer"}}>
            <DownloadDocumentIcon />
            <p>Download</p>
          </div> */}
      </div>
    </div> 
  )
}