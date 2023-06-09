import styles from "./style.module.css"

import logo from "../../common/img/logo.png"



export const Logo = () => {
    return <div>
        <img src={logo} className={styles.logo}/>
    </div>
}