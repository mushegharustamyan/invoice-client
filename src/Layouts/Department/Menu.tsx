import { Outlet } from "react-router"
import styles from "./styles.module.css"

export const Menu = () => {
  return (
      <div className={styles.layout}>
        <div className={styles.menu}>
          <div className={styles.wrapper}>
            <nav className={styles.navigation}>
              <ul>
                <li>
                  <a href="/department">Imported Invoices</a>
                </li>
                <li>
                  <a href="/department/approved">Approved Invoices</a>
                </li>
                <li>
                  <a href="/department/in-progress">In Progress Invoices</a>
                </li>
              </ul>
              <div className={styles.line}></div>
              <ul>
                <li>
                  <a href="/department/tickets">Tickets</a>
                </li>
              </ul>
            </nav>
            
          </div>
        </div>
        <Outlet />
      </div>
  )
}