import styles from "./styles.module.css"

interface IProps {
  text?: string
  width: number
  action: () => void
  render? : () => JSX.Element
}

export const Button:React.FC<IProps> = ({text , width, action, render}) => {
  return <button className={styles.button} style={{width}} onClick={() => action()}>{text} <>{render && render()}</></button>
}