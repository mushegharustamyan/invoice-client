import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { IADUser, IRawData, IRole, IUser } from "../../utils/types"
import { RootState } from "../.."

import { Table } from "../../Components/Table/Table"
import { SignOut } from "../../Components/SignOut/SignOut"
import { SearchPanel } from "../../Components/SearchPanel/SearchPanel"

import { getAllRoles } from "../../store/reducers/roleSlice"
import { getAllADUsers } from "../../store/reducers/adUserSlice"
import { getAllUsers } from "../../store/reducers/userSlice"

import styles from "./styles.module.css"
import { Header } from "../../Components/Header/Header"

export const AdminPage = () => {
  const dispatch = useDispatch()

  const adUsersColumns: IRawData[] = [
    {
      title: "Username",
      field: "username"
    },
    {
      title: "Email",
      field: "email",
    },
    {
      title: "Fullname",
      field: "fullname"
    }
  ]

  const usersColumns: IRawData[] = [
    {
      title: "Username",
      field: "username"
    },
    {
      title: "Email",
      field: "email",
    },
    {
      title: "Fullname",
      field: "fullname"
    },
    {
      title: "Role",
      field: "role"
    }
  ]

  const adUsers = useSelector<RootState>(state => state.adUsersReducer.data) as IADUser[]
  const users = useSelector<RootState>(state => state.useReducer.data) as IUser[]

  const [shownTable , setShownTable] = useState("ad")

  useEffect(() => {
    dispatch(getAllRoles())
  } , [])

  useEffect(() => {
    dispatch(getAllADUsers())
    dispatch(getAllUsers())
  } , [shownTable])

  return <div className={styles.page}>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.tables}>
        <p className={shownTable === "ad" ? `${styles.option} ${styles.selected}` : styles.option} onClick={() => setShownTable("ad")}>AD Users</p>
        <p className={shownTable === "users" ? `${styles.option} ${styles.selected}` : styles.option} onClick={() => setShownTable("users")}>Registered Users</p>
      </div>
      <SearchPanel showFilterIcon={false}/>
      {
        shownTable === "ad" && <Table columns={adUsersColumns} data={adUsers} roleBasedRender={true} option="add"/>
      }
      {
        shownTable === "users" && <Table columns={usersColumns} data={users} roleBasedRender={true} option="modify"/>
      }
    </div>
  </div>
}