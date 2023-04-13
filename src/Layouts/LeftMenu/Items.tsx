import { INavigation } from "../../utils/types"
import { Item } from "./Item"
import styles from "./styles.module.css"
interface IProps {
  data: INavigation[]
}

export const Items = ({data}: IProps) => {
  return <ul className={styles.nested}>
    {
      data.map((value) => {
        return <Item data={value}/>
      })
    }
  </ul>
}