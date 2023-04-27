import { SearchIcon } from "@fluentui/react-icons-mdl2"
import styles from "./styles.module.css"
import React, { useState } from "react"
import { render } from "@testing-library/react"

interface IProps {
  text?: string
  width: number
  render?: () => JSX.Element
  placeholder?: string
  action?: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export const Input:React.FC<IProps> = ({text , width, render, placeholder, action}) => {
  return (
    <div className={styles.container} style={{width}}>
      <>{render && render()}</>
      <label>{text}</label>
      <input type="text" className={styles.input} style={{width: '80%'}} placeholder={placeholder} onChange={(e) => action && action(e)}/>
    </div>
  )
}