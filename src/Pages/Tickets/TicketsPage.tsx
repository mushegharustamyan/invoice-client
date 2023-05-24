import React, { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux"
import { addTicket, getTickets } from "../../store/reducers/ticketSlice"
import { RootState } from "../.."
import { Table } from "../../Components/Table/Table"
import { ticketsColumns } from "../../utils/tickets/data"
import { ITicket, IUser } from "../../utils/types"
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
      <Table 
          data={data} 
          columns={ticketsColumns} 
        />
    </div>
  </div>
}