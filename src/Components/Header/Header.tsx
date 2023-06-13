import { useSelector } from "react-redux"

import { RootState } from "../.."
import { IAuth } from "../../utils/types"

import { SignOut } from "../SignOut/SignOut"

import styles from "./styles.module.css"
import { ContactIcon } from "@fluentui/react-icons-mdl2"
import { Logo } from "../Logo/Logo"

interface IProps {
    hasLogo: boolean
}

export const Header = ({hasLogo} : IProps) => {
    const user = useSelector<RootState>(state => state.authReducer) as IAuth

    return <header className={styles.container}>
       <div className={styles.wrapper} style={{justifyContent: `${hasLogo ? "" : "flex-end"}`}}>
            {hasLogo && <Logo width={50}/>}
            <div className={styles.actions} >
                <div className={styles.user}>
                    <div className={styles.user_icon}>
                        <ContactIcon />
                    </div>
                    <p>{user.fullname}</p>
                </div>
                <SignOut />
            </div>
       </div>
    </header>
}