import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"

import { logout } from "../../store/reducers/authSlice"

import { SignOutIcon } from "@fluentui/react-icons-mdl2"

import styles from "./styles.module.css"

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