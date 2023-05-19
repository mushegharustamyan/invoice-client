import { useEffect, useState } from "react"
import { Layout } from "../../Components/Layout/Layout"
import { IRawData, IRole, IUser } from "../../utils/types"
import styles from "./styles.module.css"
import { SignOut } from "../../Components/SignOut/SignOut"
import { getRoles } from "../../servieces/admin/role"
import { useDispatch, useSelector } from "react-redux"
import { getAllRoles } from "../../store/reducers/roleSlice"
import { RootState } from "../.."
import { Select } from "../../Components/Select/Select"


export const AdminPage = () => {
  const dispatch = useDispatch()

  const columns: IRawData[] = [
    {
      title: "Username",
      field: "username"
    },
  ]

  const data = [
    {
      username: "username1"
    }
  ]

  const roles = useSelector<RootState>(state => state.rolesReducer.data) as IRole[]
  const getRolesNames = () => {
    return roles.map((value) => {
      return value.name
    })
  }

  const [itemsCount , setItemsCount] = useState(3)
  const [pagesCount, setPagesCount] = useState(0)
  const [selectedPage, setSelectedPage] = useState(1)
  const passingData = data.slice((selectedPage - 1) * itemsCount ,selectedPage * itemsCount)

  useEffect(() => {
    dispatch(getAllRoles())
  } , [])

  return <div className={styles.page}>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <SignOut />
      </div>
      <Layout columns={columns} data={passingData}/>
      <Select options={getRolesNames()} width={150}/>
    </div>
  </div>
}