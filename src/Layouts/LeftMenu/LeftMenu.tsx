import { useState } from "react"
import { Outlet } from "react-router"
import styles from "./styles.module.css"
import down from "../../assets/img/down-sign.png"
import { useDispatch, useSelector } from "react-redux"
export const LeftMenu = () => {

  const [showSubMenu,setShowSubMenu]= useState(false)

  const handleDropDown = () => {
    setShowSubMenu(!showSubMenu)
  }

  return (
      <div className={styles.layout}>
        <div className={styles.menu}>
          <div className={styles.wrapper}>

            <nav className={styles.navigation}>
              <ul>
                
                <li className={styles.nested}>
                  <a href="/invoices">Imported Innvoices</a>
                  <img className={showSubMenu ?styles.icon : styles.icon_open} src={down} onClick={() => handleDropDown()} />
                </li>
                {showSubMenu? 
                <ul className={styles.nested_list}>
                  <li>
                    <a href="/invoices/matched">Matched</a>
                  </li>
                  <li>
                    <a href="/invoices/not-matched">Not Matched</a>
                  </li>
                  <li>
                    <a href="/invoices/under-clarification">Under Clarification</a>
                  </li>
                </ul>
                : null
                }
                <li>
                  <a href="/invoices/errors">Error Invoices</a>
                </li>
                <li>
                  <a href="/invoices/signed">Signed Invoices</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Outlet />
      </div>
  )
}