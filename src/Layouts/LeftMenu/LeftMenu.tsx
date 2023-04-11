import { useState } from "react"
import { Outlet } from "react-router"
import styles from "./styles.module.css"
import down from "../../assets/img/down-sign.png"
import { Link } from "react-router-dom"

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
                  <Link to="/invoices">Imported Innvoices</Link>
                  <img className={showSubMenu ?styles.icon : styles.icon_open} alt="dropdown" src={down} onClick={() => handleDropDown()} />
                </li>
                {showSubMenu? 
                <ul className={styles.nested_list}>
                  <li>
                    <Link to="/invoices/matched">Matched</Link>
                  </li>
                  <li>
                    <Link to="/invoices/not-matched">Not Matched</Link>
                  </li>
                  <li>
                    <Link to="/invoices/under-clarification">Under Clarification</Link>
                  </li>
                </ul>
                : null
                }
                <li>
                  <Link to="/invoices/errors">Error Invoices</Link>
                </li>
                <li>
                  <Link to="/invoices/signed">Signed Invoices</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Outlet />
      </div>
  )
}