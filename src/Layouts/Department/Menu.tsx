import { Outlet } from "react-router"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

export const Menu = () => {
  return (
      <div className={styles.layout}>
        <div className={styles.menu}>
          <div className={styles.wrapper}>
            <nav className={styles.navigation}>
              <ul>
                <li>
                  <Link to="/department">Imported Invoices</Link>
                </li>
                <li>
                  <Link to="/department/approved">Approved Invoices</Link>
                </li>
                <li>
                  <Link to="/department/in-progress">In Progress Invoices</Link>
                </li>
              </ul>
              <div className={styles.line}></div>
              <ul>
                <li>
                  <Link to="/department/tickets">Tickets</Link>
                </li>
              </ul>
            </nav>
            
          </div>
        </div>
        <Outlet />
      </div>
  )
}