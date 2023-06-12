import { useSelector } from "react-redux"

import { RootState } from "../.."
import { IAuth } from "../../utils/types"

import { SignOut } from "../SignOut/SignOut"

import styles from "./styles.module.css"
import { ContactIcon, UserFollowedIcon } from "@fluentui/react-icons-mdl2"
import { Logo } from "../Logo/Logo"

export const Header = () => {
    const user = useSelector<RootState>(state => state.authReducer) as IAuth

    console.log(user)

    return <div className={styles.container}>
        <Logo />
        <div className={styles.user}>
            <div className={styles.user_icon}>
                <ContactIcon />
            </div>
            <p>{user.fullname}</p>

        </div>
        <SignOut />
    </div>
}