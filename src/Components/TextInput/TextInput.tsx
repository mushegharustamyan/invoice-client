import styles from "./styles.module.css"
import React from "react"

interface IProps {
  text?: string | JSX.Element
  width: number
  placeholder?: string
  action?: (e:React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}

export const Input:React.FC<IProps> = ({text , width, placeholder, action, type}) => {
  return (
    <div className={styles.container} style={{width}}>
      <label>{text}</label>
      <input type={type || "text"} className={styles.input} style={{width: '80%'}} placeholder={placeholder} onChange={(e) => action && action(e)}/>
    </div>
  )
}