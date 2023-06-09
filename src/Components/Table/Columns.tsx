import { SortIcon } from "@fluentui/react-icons-mdl2"
import { IRawData } from "../../utils/types"
import styles from "./styles.module.css"

interface IProps {
    columns: IRawData[]
    width: number
}

export const Columns = ({columns , width} : IProps) => {
    return <>
        {
            columns.map((value , index) => {
                return value.render ? <div style={{width: `${width}%`}} key={index} className={styles.column}>
                    {value.render()}
                    {
                        value.field !== "status" && <SortIcon />
                    }
                </div> : <div style={{width: `${width}%`}} key={index} className={styles.column}>{value.title}</div>
            })
        }
    </>
}