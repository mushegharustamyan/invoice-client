import React, { useRef, useState } from "react"
import { Button } from "../Button/Button"
import { Input } from "../TextInput/TextInput"
import styles from "./styles.module.css"

export const Login = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")

  const changeEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const changePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const login = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(email , password)
  }

  return (
    <div className={styles.page}>
      <form className={styles.form}>
        <div className={styles.wrapper}>
          <Input width={350} text="Email" action={changeEmail}/>
          <Input width={350} text="Password" action={changePassword}/>
          <Button width={350} text="Sign In" action={login}/>
        </div>
      </form>
    </div>
  )
}