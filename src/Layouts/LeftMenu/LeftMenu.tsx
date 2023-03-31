import { Outlet } from "react-router"
import styles from "./styles.module.css"
export const LeftMenu = () => {
  return (
      <div className={styles.layout}>
        <div className={styles.menu}>
          <div className={styles.wrapper}>
            <nav className={styles.navigation}>
              <ul>
                <li>
                  <a href="/invoices">All</a>
                </li>
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
              </ul>
            </nav>
          </div>
        </div>
        <Outlet />
      </div>
  )
}