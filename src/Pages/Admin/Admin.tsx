import { useEffect, useState } from "react"
import { Table } from "../../Components/Table/Table"
import { IADUser, IRawData, IRole, IUser } from "../../utils/types"
import styles from "./styles.module.css"
import { SignOut } from "../../Components/SignOut/SignOut"
import { getRoles } from "../../servieces/admin/role"
import { useDispatch, useSelector } from "react-redux"
import { getAllRoles } from "../../store/reducers/roleSlice"
import { RootState } from "../.."
import { Select } from "../../Components/Select/Select"
import { getADusers } from "../../servieces/admin/ad-users"
import { getAllADUsers } from "../../store/reducers/adUserSlice"


export const AdminPage = () => {
  const dispatch = useDispatch()

  const columns: IRawData[] = [
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

  const adUsers = useSelector<RootState>(state => state.adUsersReducer.data) as IADUser[]

  const [shownTable , setShownTable] = useState("ad")

  useEffect(() => {
    dispatch(getAllRoles())
    dispatch(getAllADUsers())
  } , [])

  return <div className={styles.page}>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <SignOut />
      </div>
      <div className={styles.tables}>
        <p className={shownTable === "ad" ? `${styles.option} ${styles.selected}` : styles.option} onClick={() => setShownTable("ad")}>AD Users</p>
        <p className={shownTable === "users" ? `${styles.option} ${styles.selected}` : styles.option} onClick={() => setShownTable("users")}>Users</p>
      </div>
      {
        shownTable === "ad" && <Table columns={columns} data={adUsers} roleBasedRender={true} option="add"/>
      }
      {
        shownTable === "users" && <Table columns={columns} data={adUsers} roleBasedRender={true} option="modify"/>
      }
    </div>
  </div>
}