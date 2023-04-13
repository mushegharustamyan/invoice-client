import { Link } from "react-router-dom"
import { INavigation } from "../../utils/types"
import styles from "./styles.module.css"
import { useState } from "react"
import down from "../../assets/img/down-sign.png"
import { Items } from "./Items"


interface Iprops {
  data: INavigation
}

export const Item = ({data} : Iprops) => {
  const {path , title , subMenu} = data

  const [showSubMenu , setShowSubMenu] = useState(false)

  const handleDropDown = () => {
    setShowSubMenu(!showSubMenu)
  }

  return <>
    <li className={styles.nested_list}>
      <Link to={path}>{title}</Link>
      {
        subMenu &&
        <img className={showSubMenu ?styles.icon : styles.icon_open} alt="dropdown" src={down} onClick={() => handleDropDown()} />
      }
    </li>
    {
      showSubMenu && subMenu && <Items data={subMenu} />
    }
  </>
}