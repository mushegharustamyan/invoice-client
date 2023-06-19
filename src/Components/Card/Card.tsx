import styles from "./styles.module.css"

interface IProps {
  data: {
    value: string | JSX.Element
    align?: string
  }[]
  last?: true 
  showCheckbox: boolean | undefined
  width: number
} 

export const Card:React.FC<IProps> = ({data , last , showCheckbox , width}) => { 

  return (
    <div className={styles.card_wrapper}>
      {showCheckbox && <input type="checkbox"/>}
      <div className={!last ? styles.card : styles.last} >
        <div className={styles.wrapper}>
            {
              data.map((value , index) => {
                return <div key={index} style={{width:`${width}%` , textAlign: `${value.align ? "right" : "left"}`}} className={styles.row}>{value.value}</div>
              }) 
            }
        </div>
      </div> 
    </div>
  )
}