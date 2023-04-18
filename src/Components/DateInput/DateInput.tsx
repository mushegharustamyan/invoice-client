import styles from "./style.module.css"

interface IProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const DateInput = ({handleChange} : IProps) => {
  return <input type="date" onChange={(e) => handleChange(e)} className={styles.input}/>
}