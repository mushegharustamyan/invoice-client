import { IChildrenProps } from "../../utils/types"
import styles from "./styles.module.css"

interface IProps extends IChildrenProps {
    action: (e: React.MouseEvent) => void
}

export const Modal = (props: IProps) => {

    return <div className={styles.container} onClick={(e) => props.action(e)}>
        {props.children}
    </div>
}