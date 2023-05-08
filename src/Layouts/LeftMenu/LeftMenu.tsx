import { Outlet, useNavigate } from "react-router"
import styles from "./styles.module.css"
import { INavigation } from "../../utils/types"
import { Item } from "./Item"
import { SignOutIcon } from "@fluentui/react-icons-mdl2"

interface IProps {
  navList: INavigation[] 
}

export const LeftMenu = ({navList}: IProps) => {

  const navigate = useNavigate()

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