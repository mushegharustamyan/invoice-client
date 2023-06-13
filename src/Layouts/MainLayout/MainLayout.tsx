import { Outlet, useLocation } from "react-router"
import styles from "./styles.module.css"
import { LeftMenu } from "../LeftMenu/LeftMenu"
import { INavigation } from "../../utils/types"
import { Header } from "../../Components/Header/Header"
import { Footer } from "../../Components/Footer/Footer"
import { hasHeader, hasLeftMenu, hasLogo } from "./helper"

interface IProps {
    navList? : INavigation[]
}

export const MainLayout = ({navList} : IProps) => {
    const location = useLocation()
    const path = location.pathname

    return <div className={styles.layout}>
            {hasLeftMenu(path) && !!navList && <div className={styles.menu}>
                <LeftMenu navList={navList} />
            </div>}
            <div className={hasLeftMenu(path) ? styles.container : styles.container_stretched}>
                {hasHeader(path) && <Header hasLogo={hasLogo(path)}/>}
                <Outlet />
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>        
        </div>
}