import { useState } from "react"
import { Outlet } from "react-router"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import { INavigation } from "../../utils/types"
import { Item } from "./Item"

interface IProps {
  navList: INavigation[] 
}

export const LeftMenu = ({navList}: IProps) => {

  return (
      <div className={styles.layout}>
        <div className={styles.menu}>
          <div className={styles.wrapper}>
            <nav className={styles.navigation}>
              <ul>
                {
                  navList.map((value) => {
                    return <Item data={value}/>
                  })
                }
              </ul>
            </nav>
          </div>
        </div>
        <Outlet />
      </div>
  )
}