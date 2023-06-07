import { Link } from "react-router-dom"
import { useState } from "react"

import { INavigation } from "../../utils/types"

import { Items } from "./Items"

import { ChevronDownIcon } from "@fluentui/react-icons-mdl2"

import styles from "./styles.module.css"


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
      <Link to={path}>{title}</Link>
      {
        subMenu &&
        <ChevronDownIcon className={showSubMenu ?styles.icon : styles.icon_open} style={iconStyles}  onClick={() => handleDropDown()}/>
      }
    </li>
    {
      showSubMenu && subMenu && <Items data={subMenu} />
    }
  </>
}