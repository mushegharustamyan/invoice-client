import styles from "./styles.module.css"

interface IProps {
  fields: string[],
  routes: string[]
}

export const SubMenu = ({fields , routes}: IProps) => {
  return (
    <ul className={styles.list}>
      {
        fields.map((value , index) => {
          return <li>
            <a href={routes[index]}>{value}</a>
          </li>
        })
      }
    </ul>
  )
}