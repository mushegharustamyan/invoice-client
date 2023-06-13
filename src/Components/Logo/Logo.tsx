import styles from "./style.module.css"

import logo from "../../common/img/logo.png"

interface IProps {
    width: number
}

export const Logo = ({width}: IProps) => {
    return <div>
        <img src={logo} style={{width: `${width}px`}} className={styles.logo}/>
    </div>
}