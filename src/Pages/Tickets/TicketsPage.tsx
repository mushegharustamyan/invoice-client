import { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getTickets } from "../../store/reducers/ticketSlice"
import { RootState } from "../.."
import { Layout } from "../../Components/Layout/Layout"
import { ticketsColumns } from "../../utils/tickets/data"
import { ITicket } from "../../utils/types"
import { Button } from "../../Components/Button/Button"
import { Input } from "../../Components/TextInput/TextInput"

interface IProps {
  title: string
}

export const TicketsPage = ({title}: IProps) => {
  const dispatch = useDispatch()

  const [showField, setShowField] = useState(false)

  const [description , setDescription] = useState("")

  const handleSetDescription = (description:string) => {
    setDescription(description)
  }

  const handleShowField = () => {
    setShowField(!showField)
  }

  useEffect(() => {
    dispatch(getTickets())
  } , [])

  const data = useSelector<RootState>(state => state.ticketsReducer.data) as ITicket[]

  console.log(data)

  return <div className={styles.cards}>
    <div className={styles.wrapper}>
      <p className={styles.page_title}>{title}</p>
      <Button text={"Make a Ticket"} width={250} action={handleShowField}/>
      {
        showField && <div className={styles.make}>
          <Input width={800}/>
          <Button text={"Add"} width={150} action={() => undefined}/>
        </div>
      }
      <Layout data={data} columns={ticketsColumns}/>
    </div>
  </div>
}