import React from "react"
import styles from "./style.module.css"

interface IProps {
  options?: {id: number , value: string}[]
  counts?: number[] 
  title?: string
  itemsCount?: number
  width: number
  selected? : number
  action?: (count: number) => void
  setSelected?: (role: string) => void
}

export const Select = ({options , title, itemsCount, width, selected, action , setSelected} : IProps) => {
  const itemsCountArray = (count: number) => {
    const numbers: number[] = []

    for(let i = 1 ; i <= count ; i++) {
      numbers.push(i)
    }

    return numbers
  }

  return <select className={styles.select} style={{width: `${width}px`}} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => setSelected && setSelected(e.target.value) || action && action(+e.target.value)}>
    {title && <option>{title}</option>}
    {
      options && options.map((value , index) => {
        return <option value={value.id} key={index}>{value.value}</option>
      })
    }
    {
      itemsCount && itemsCountArray(itemsCount).map((value, index) => {
        if(selected && selected === index + 1) {
          return <option key={index} value={value} selected>{value}</option>
        }
        return <option key={index} value={value}>{value}</option>
      })
    }
  </select>
}