import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux"
import { addTicket, getTickets } from "../../store/reducers/ticketSlice"
import { RootState } from "../.."
import { Layout } from "../../Components/Layout/Layout"
import { ticketsColumns } from "../../utils/tickets/data"
import { ITicket } from "../../utils/types"
import { Button } from "../../Components/Button/Button"
import { Input } from "../../Components/TextInput/TextInput"
import { AddIcon, CreateMailRuleIcon } from "@fluentui/react-icons-mdl2"

interface IProps {
  title: string
}

export const TicketsPage = ({title}: IProps) => {
  const dispatch = useDispatch()

  const [showField, setShowField] = useState(false)

  const [description , setDescription] = useState("")

  const handleSetDescription = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const handleShowField = () => {
    setShowField(!showField)
  }

  useEffect(() => {
    dispatch(getTickets())
  } , [])

  const handleAddTicket = () => {
    dispatch(addTicket(description))
  }

  const data = useSelector<RootState>(state => state.ticketsReducer.data) as ITicket[]

  const [itemsCount , setItemsCount] = useState(3)
  const [pagesCount, setPagesCount] = useState(0)
  const [selectedPage, setSelectedPage] = useState(1)
  const passingData = data.slice((selectedPage - 1) * itemsCount ,selectedPage * itemsCount)

  useEffect(() => {
    data.length / itemsCount < 1 ? setPagesCount(1) : setPagesCount(Math.ceil(data.length / itemsCount))
  } , [data , itemsCount])

  console.log(selectedPage)

  const changeItemsCount = (count: number) => {
    setItemsCount(count)
  }

  const changeSelectedPage = (page:number) => {
    setSelectedPage(page)
  }

  const changePagesCount = (count: number) => {
    setPagesCount(count)
  }

  const turnNextPage = () => {
    if(selectedPage + 1 <= pagesCount) setSelectedPage(selectedPage + 1)
  }

  const turnPreviousPage = () => {
    if(selectedPage - 1 > 0) setSelectedPage(selectedPage - 1)
  }


  return <div className={styles.cards}>
    <div className={styles.wrapper}>
      <p className={styles.page_title}>{title}</p>
      <Button width={150} text="Make" action={handleShowField} render={() => <AddIcon />}/>
      {
        showField && <div className={styles.make}>
          <Input width={600} placeholder="Write description here" action={handleSetDescription}/>
          <Button text={"Apply"} width={150} action={() => handleAddTicket()}/>
        </div>
      }
      <Layout 
          data={passingData} 
          columns={ticketsColumns} 
          pagesCount={pagesCount} 
          itemsCount={itemsCount} 
          selectedPage={selectedPage} 
          totalInvoices={data.length}
          setItemsCount={changeItemsCount}
          setSelectedPage={changeSelectedPage}
          turnNextPage={turnNextPage}
          turnPreviousPage={turnPreviousPage}
        />
    </div>
  </div>
}