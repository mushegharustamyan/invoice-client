import { SearchIcon } from "@fluentui/react-icons-mdl2"
import styles from "./styles.module.css"
import { useState } from "react"

interface IProps {
  text?: string
  width: number
}

export const Input:React.FC<IProps> = ({text , width}) => {
  return (
    <div className={styles.container} style={{width}}>
      <label>{text}</label>
      <SearchIcon />
      <input type="text" className={styles.input} style={{width: '80%'}}/>
    </div>
  )
}