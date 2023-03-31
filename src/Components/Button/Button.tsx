import styles from "./styles.module.css"

interface IProps {
  text: string
  width: number
}

export const Button:React.FC<IProps> = ({text , width}) => {
  return <button className={styles.button} style={{width}}>{text}</button>
}