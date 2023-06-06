import { useSelector } from "react-redux"
import { useState } from "react"

import { IRole } from "../../utils/types"
import { RootState } from "../.."

import { Select } from "../Select/Select"
import { addUser } from "../../services/admin/ad-users"

import { AddIcon } from "@fluentui/react-icons-mdl2"

import styles from "./styles.module.css"

interface IProps {
    id: number
}

export const AddUser = ({id} : IProps) => {
    const [selectedRole , setSelectedRole] = useState("")

    const roles = useSelector<RootState>(state => state.rolesReducer.data) as IRole[]

    const handleAddUser = async () => {
        await addUser(+selectedRole , id)
    }

    const getRolesNames = () => {
        return roles.map((value) => {
            return {id: value.id , value: value.name}
        })
    }

    return (
        <div className={styles.container}>
            <Select options={getRolesNames()} title="Select Role" width={150} setSelected={(role: string) => setSelectedRole(role)}/>
            <AddIcon onClick={handleAddUser}/>
        </div>
    )
}