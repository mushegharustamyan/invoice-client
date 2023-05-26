import { useSelector } from "react-redux"
import { Button } from "../Button/Button"
import { Select } from "../Select/Select"
import { RootState } from "../.."
import { IRole } from "../../utils/types"
import styles from "./styles.module.css"
import { AddIcon } from "@fluentui/react-icons-mdl2"
import { useState } from "react"
import { addUser } from "../../servieces/admin/ad-users"

export const AddUser = ({id} : {id: number}) => {
    const handleAddUser = async () => {
        await addUser(+selectedRole , id)
    }

    const [selectedRole , setSelectedRole] = useState("")

    const roles = useSelector<RootState>(state => state.rolesReducer.data) as IRole[]
    const getRolesNames = () => {
        return roles.map((value) => {
        return {id: value.id , value: value.name}
        })
    }

    return <div className={styles.container}>
        <Select options={getRolesNames()} title="Select Role" width={150} setSelected={(role: string) => setSelectedRole(role)}/>
        <AddIcon onClick={handleAddUser}/>
    </div>
}