import { SortIcon } from "@fluentui/react-icons-mdl2"
import { IRawData } from "../../utils/types"
import styles from "./styles.module.css"
import { useState , useEffect} from "react"

interface IProps {
    columns: IRawData[]
    width: number
}

export const Columns = ({columns , width} : IProps) => {
    const [showColumns , setShownColumns] = useState(columns)

    const hanldeHideOptions = (e: MouseEvent) => {
        const data = Object.entries(columns)

        const result = data.map((value , index) => {
            value[1].isOpen = false
            
            return value[1]
        })

        setShownColumns(result)

        document.body.removeEventListener('click', hanldeHideOptions);
    };

    const handleOpen = async (e: React.MouseEvent<Element, MouseEvent> , id: string) => {
        e.stopPropagation()

        const data = Object.entries(columns)

        const result = data.map((value , index) => {
            if(value[1].field === id) {
                value[1].isOpen = true
            } else {
                value[1].isOpen = false
            }
            
            return value[1]
        })

        setShownColumns(result)

        document.body.addEventListener('click', hanldeHideOptions);
    }

    useEffect(() => {
        document.body.removeEventListener("click" , hanldeHideOptions)
    } , [])

    return <>
        {
            columns.map((value , index) => {
                return value.render ? <div style={{width: `${width}%` , justifyContent: `${value.field === "amount" ? "flex-end" : "flex-start"}`}} key={index} className={styles.column}>
                    {value.render(handleOpen , value.isOpen || false)}
                    {
                        value.field !== "status" && <SortIcon />
                    }
                </div> : <div style={{width: `${width}%`}} key={index} className={styles.column}>{value.title}</div>
            })
        }
    </>
}