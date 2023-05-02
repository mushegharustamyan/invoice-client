import React from "react"
import styles from "./style.module.css"

interface IProps {
  options?: string[] | number[]
  title?: string
  itemsCount?: number
  width: number
  selected? : number
  action?: (count: number) => void
}

export const Select = ({options , title, itemsCount, width, selected, action} : IProps) => {
  const itemsCountArray = (count: number) => {
    const numbers: number[] = []

    for(let i = 1 ; i <= count ; i++) {
      numbers.push(i)
    }

    return numbers
  }

  return <select className={styles.select} style={{width: `${width}px`}} onChange={(e:React.ChangeEvent<HTMLSelectElement>) => action && action(+e.target.value)}>
    {title && <option>{title}</option>}
    {
      options && options.map((value) => {
        return <option value={value}>{value}</option>
      })
    }
    {
      itemsCount && itemsCountArray(itemsCount).map((value, index) => {
        if(selected && selected === index + 1) {
          return <option value={value} selected>{value}</option>
        }
        return <option value={value}>{value}</option>
      })
    }
  </select>
}