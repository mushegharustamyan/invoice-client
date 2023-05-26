import { useSelector } from "react-redux"
import { Button } from "../Button/Button"
import { RootState } from "../.."
import { IRole } from "../../utils/types"
import { Select } from "../Select/Select"
import { DeleteIcon, EditIcon, UserRemoveIcon } from "@fluentui/react-icons-mdl2"

import styles from "./styles.module.css"
import { getRoles } from "@testing-library/react"
import { useState } from "react"
import { deleteUser, editUser } from "../../servieces/admin/user"

export const ModifyUser = ({id} : {id: number}) => {
    const roles = useSelector<RootState>(state => state.rolesReducer.data) as IRole[]

    const [selectedRole , setSelectedRole] = useState("")

    const handleEdit = () => {
        editUser(id , +selectedRole)
    }

    const handleDelete = () => {
        deleteUser(id)
    }

    const getRolesNames = () => {
        return roles.map((value) => {
        return {id: value.id , value: value.name}
        })
    }

    return <div className={styles.container}>
        <div className={styles.edit}>
            <Select options={[...getRolesNames()]} title="Select Role" width={150} setSelected={setSelectedRole}/>
            <EditIcon onClick={handleEdit}/>
        </div>
        <DeleteIcon onClick={handleDelete}/>
    </div>
}