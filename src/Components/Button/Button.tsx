import styles from "./styles.module.css"

interface IProps {
  text: string
  width: number
  action: () => void
}

export const Button:React.FC<IProps> = ({text , width, action}) => {
  return <button className={styles.button} style={{width}} onClick={() => action()}>{text}</button>
}