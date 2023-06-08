import React, { useEffect ,useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { changeFilterBy } from "../../store/reducers/inVoicesFillterts"

import { ChevronDownIcon } from "@fluentui/react-icons-mdl2"

import styles from "./style.module.css"

interface IProps {
  title: string
  options: string[]
}

export const SearchAbleSelect = ({title , options} : IProps) => {
  const dispatch = useDispatch()
  const [localOptions , setLocalOptions] = useState([...options]) 
  const [showOptions , setShowOptions] = useState(false)

  const defaultOptions =  [...options]

  const hanldeHideOptions = () => {
    setShowOptions(false)
    document.removeEventListener("click" ,hanldeHideOptions)
  }

  const handleShowOptions = (e:React.MouseEvent) => {
    e.stopPropagation()
    setShowOptions(true)
    document.body.addEventListener('click', hanldeHideOptions)
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

  return <div className={styles.select}>
      <div className={styles.head} onClick={(e) => handleShowOptions(e)}>
        <input type="text" onChange={(e) => filterOptions(e)} className={styles.input} placeholder={title}/>
        <ChevronDownIcon className={showOptions ? styles.icon : styles.icon_open} style={{color: "#2b579a"}}/>
      </div>
      {
        showOptions && <div className={styles.options}>
          <div className={styles.wrapper}>
            <div className={styles.options_list}>
              {
                localOptions.map((value) => <p className={styles.option_item}>{value}</p>)
              }
            </div>
          </div>  
        </div>
      }
  </div>
}