import styles from "./style.module.css"

interface IProps {
  options: string[]
  title: string
}

export const Select = ({options , title} : IProps) => {
  return <select className={styles.select}>
    <option>{title}</option>
    {
      options.map((value) => {
        return <option value={value}>{value}</option>
      })
    }
  </select>
}