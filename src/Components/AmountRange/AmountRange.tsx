import { ResetIcon } from "@fluentui/react-icons-mdl2"

import styles from "./style.module.css"

export const AmountRange = () => {
    return <form className={styles.form}>
        <p className={styles.label}>Select Amount Range</p>
        <div className={styles.container}>
            <div className={styles.option}>
                <label>From:</label>
                <input type="number" className={styles.input}/>
            </div>
            <button type="reset" className={styles.reset}><ResetIcon /></button>
        </div>
        <div className={styles.option}>
            <label>To:</label>
            <input type="number" className={styles.input}/>
        </div>
    </form>
}