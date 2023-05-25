import { useSelector } from "react-redux"
import { Button } from "../Button/Button"
import { RootState } from "../.."
import { IRole } from "../../utils/types"
import { Select } from "../Select/Select"
import { DeleteIcon } from "@fluentui/react-icons-mdl2"

import styles from "./styles.module.css"

export const ModifyUser = () => {
    const roles = useSelector<RootState>(state => state.rolesReducer.data) as IRole[]
    const getRolesNames = () => {
        return roles.map((value) => {
        return value.name
        })
    }

    return <div className={styles.container}>
        <Button text="Change Role" width={150}/>
        <Select options={getRolesNames()} width={150}/>
        <DeleteIcon />
    </div>
}