import { SortIcon } from "@fluentui/react-icons-mdl2"
import { IChildrenProps } from "../../utils/types"

export const ColumnLabel = (props : IChildrenProps) => {
    return <>
        {props.children}
        <SortIcon />
    </> 
}