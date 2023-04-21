import { useState } from "react"
import styles from "./style.module.css"
import down from "../../assets/img/down-icon-blue.png"
import { useDispatch } from "react-redux"
import { getInvoices } from "../../store/reducers/invoiceSlice"

interface IProps {
  title: string
  options: string[]
}

export const SearchAbleSelect = ({title , options} : IProps) => {
  const [showOptions , setShowOptions] = useState(false)

  const defaultOptions =  [...options]

  const [localOptions , setLocalOptions] = useState([...options]) 

  const handleShowOptions = () => {
    setShowOptions(!showOptions)
  }

  const filterOptions = (e:React.ChangeEvent<HTMLInputElement>) => {
    let newOptions: string[] = localOptions

    if (e.target.value !== "") {
      newOptions = newOptions.filter((value) => {
        return `${value}`.toLocaleLowerCase().includes(e.target.value.toLowerCase())
      })

      setLocalOptions(newOptions)
    } else {
      setLocalOptions(defaultOptions)
    }    
  }

  const dispatch = useDispatch()

  const searchInvoices = (field: string , value: string) => {
    
  }

  return <div className={styles.select}>
      <div onClick={() => handleShowOptions()} className={styles.head}>
        <p>{title}</p>
        <img src={down} className={styles.icon}/>
      </div>
      {
        showOptions && <div className={styles.options}>
          <div className={styles.wrapper}>
            <input type="text" onChange={(e) => filterOptions(e)} className={styles.input}/>
            <div className={styles.options_list}>
              {
                localOptions.map((value) => <p onClick={() => searchInvoices(title , value)}>{value}</p>)
              }
            </div>
          </div>  
        </div>
      }
  </div>
}