import React from "react"

import styles from "./styles.module.css"

interface IProps {
  text?: string
  width: number
  action?: (e:React.MouseEvent<HTMLButtonElement>) => void
  render? : () => JSX.Element
}

export const Button:React.FC<IProps> = ({text , width, action, render}) => {
  return <button className={styles.button} style={{width}} onClick={(e) => action && action(e)}>{text} <>{render && render()}</></button>
}