import { Link } from "react-router-dom"
import { INavigation } from "../../utils/types"
import styles from "./styles.module.css"
import { useState } from "react"
import down from "../../assets/img/down-sign.png"
import { Items } from "./Items"
import { ChevronDownIcon } from "@fluentui/react-icons-mdl2"


interface Iprops {
  data: INavigation
}

export const Item = ({data} : Iprops) => {
  const {path , title , subMenu} = data

  const [showSubMenu , setShowSubMenu] = useState(false)

  const handleDropDown = () => {
    setShowSubMenu(!showSubMenu)
  }

  const iconStyles = {
    color: "#fff"
  };

  return <>
    <li className={subMenu? `${styles.nested_list} ${styles.border}` : styles.nested_list}>
      {
        subMenu &&
        <ChevronDownIcon className={showSubMenu ?styles.icon : styles.icon_open} style={iconStyles}  onClick={() => handleDropDown()}/>
      }
      <Link to={path}>{title}</Link>
    </li>
    {
      showSubMenu && subMenu && <Items data={subMenu} />
    }
  </>
}