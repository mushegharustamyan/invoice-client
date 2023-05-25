import { useSelector } from "react-redux"
import { Button } from "../Button/Button"
import { Select } from "../Select/Select"
import { RootState } from "../.."
import { IRole } from "../../utils/types"
import styles from "./styles.module.css"

export const AddUser = () => {
    const handleAddUser = () => {
        
    }

    const roles = useSelector<RootState>(state => state.rolesReducer.data) as IRole[]
    const getRolesNames = () => {
        return roles.map((value) => {
        return value.name
        })
    }

    return <div className={styles.container}>
        <Button width={150} text="Add User" action={() => handleAddUser()}/>
        <Select options={getRolesNames()} width={150}/>
    </div>
}