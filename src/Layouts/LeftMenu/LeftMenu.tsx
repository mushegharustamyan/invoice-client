import { Outlet, useNavigate } from "react-router"

import { INavigation } from "../../utils/types"

import { Item } from "./Item"

import styles from "./styles.module.css"
import { Logo } from "../../Components/Logo/Logo"

interface IProps {
  navList: INavigation[] 
}

export const LeftMenu = ({navList}: IProps) => {

  const navigate = useNavigate()

  return (
      <div className={styles.layout}>
        <div className={styles.menu}>
          <div className={styles.wrapper}>
          <Logo width={100}/>
            <nav className={styles.navigation}>
              <ul>
                {
                  navList.map((value , index) => {
                    return <Item data={value} key={index}/>
                  })
                }
              </ul>
            </nav>
          </div>
        </div>
      </div>
  )
}