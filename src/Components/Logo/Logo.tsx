import styles from "./style.module.css"

import logo from "../../common/img/logo.png"
import logo1 from "../../common/img/logo1.svg"
import logo2 from "../../common/img/logo2.svg"
import logo3 from "../../common/img/logo3.png"


interface IProps {
    width: number
    path: string
}

const setLogo = (path: string) => {
    switch (path) {
        case "/admin" :
            return logo2
        default :
            return logo1
    }
}

export const Logo = ({width , path}: IProps) => {
    return <div>
        <img src={setLogo(path)} style={{width: `${width}px`}} className={styles.logo}/>
    </div>
}