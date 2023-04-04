import { useState } from "react"
import { Input } from "../TextInput/TextInput"
import styles from "./styles.module.css"

interface IProps {
  icon: string
}

export const SearchPanel = ({icon} : IProps) => {
  const [showFilters , setShowFilters] = useState(false)

  const handleDropDown = () => {
    setShowFilters(!showFilters)
  }

  return <div className={styles.panel}>
    <div className={styles.head}>
      <Input width={600} text="Search"/>
      <div className={styles.filters}>
          <p>Filters</p>
          <img src={icon} className={showFilters ? styles.icon : styles.icon_open} onClick={() => handleDropDown()}/>
      </div>
    </div>
        {
            showFilters? 
            <div className={styles.filters_container}>
              <div>
                
              </div>
            </div> 
            : null
        }
  </div>
}