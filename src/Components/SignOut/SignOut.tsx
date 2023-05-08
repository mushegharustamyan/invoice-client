import { SignOutIcon } from "@fluentui/react-icons-mdl2"
import Cookies from "js-cookie"
import styles from "./styles.module.css"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { logout } from "../../store/reducers/userSlice"

export const SignOut = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  return <div onClick={() => {
    dispatch(logout())
    navigate('/')
  }} className={styles.container}>
    <SignOutIcon />
    <p>Sign Out</p>
  </div>
} 