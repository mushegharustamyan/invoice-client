import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Button } from "../Button/Button"
import { Input } from "../TextInput/TextInput"
import { login } from "../../store/reducers/authSlice"

import styles from "./styles.module.css"

export const Login = () => {
  const dispatch = useDispatch()

  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")

  const changeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const changePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(login({username , password}))
  }

  return (
    <div className={styles.page}>
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <Input width={350} text="Username" action={changeEmail}/>
          <Input width={350} text="Password" action={changePassword} type="password"/>
          <Button width={350} text="Sign In" action={handleLogin}/>
        </div>
      </form>
    </div>
  )
}