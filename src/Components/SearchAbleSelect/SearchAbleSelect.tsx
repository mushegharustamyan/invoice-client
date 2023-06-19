import React, { useEffect ,useState, useRef } from "react"
import { useDispatch } from "react-redux"

import { ChevronDownIcon } from "@fluentui/react-icons-mdl2"

import styles from "./style.module.css"

interface IProps {
  title: string
  options: string[]
  id: string
  isOpen?: boolean 
  handleOpen: (e: React.MouseEvent , id: string) => void
}

export const SearchAbleSelect = ({title , options , handleOpen , id , isOpen} : IProps) => {
  const dispatch = useDispatch()
  const [localOptions , setLocalOptions] = useState([...options]) 

  const defaultOptions =  [...options]

  const filterOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newOptions: string[] = localOptions;

    if (e.target.value !== '') {
      newOptions = newOptions.filter((value) =>
        `${value}`.toLocaleLowerCase().includes(e.target.value.toLowerCase())
      );

      setLocalOptions(newOptions);
    } else {
      setLocalOptions(defaultOptions);
    }
  };

  return (
    <div className={styles.select}>
      <div className={styles.head} onClick={(e: React.MouseEvent<Element, MouseEvent>) => handleOpen(e , id)}>
        <input
          type="text"
          onChange={filterOptions}
          className={styles.input}
          placeholder={title}
        />
        <ChevronDownIcon
          className={isOpen ? styles.icon : styles.icon_open}
          style={{ color: '#2b579a' }}
        />
      </div>
      {isOpen && (
        <div className={styles.options}>
          <div className={styles.wrapper}>
              {localOptions.map((value) => (
                <p className={styles.option_item}>{value}</p>
              ))}
          </div>
        </div>
      )}
    </div>
  );

}