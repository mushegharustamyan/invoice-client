import { useState } from "react"
import { Modal } from "../Modal/Modal"
import styles from "./styles.module.css"
import { CheckMarkIcon, ChevronUpIcon, ChromeCloseIcon, ClosePaneIcon, StatusCircleErrorXIcon, WarningIcon } from "@fluentui/react-icons-mdl2"
import { Input } from "../TextInput/TextInput"

export const EditInvoice = () => {
    const [showModal , setShowModal] = useState(false)
    const [showOptional , setShowOptional] = useState(false)
    const [showErrorInput , setShowErrorInput] = useState(false)

    const handleShowModal = (e:React.MouseEvent) => {
        e.stopPropagation()
        setShowModal(!showModal)
    }

    const openModal = () => {
        setShowModal(true)
    }

    const openOptional = () => {
        setShowOptional(true)
    }

    const closeOptional = () => {
        setShowOptional(false)
    }

    const hanldeShowErrorInput = () => {
        setShowErrorInput(!showErrorInput)
    }

    return <div className={styles.container}>
        {
            showOptional ? <div className={styles.options}>
                <div className={styles.error}>
                    <input id="not_mine" type="checkbox" />
                    <label htmlFor="not_mine">Not Mine</label>
                </div>
                <div className={styles.error}>
                    <input id="error" type="checkbox" onClick={() => hanldeShowErrorInput()}/>
                    <label htmlFor="error">Error</label>
                </div>
                {
                    showErrorInput && <Input width={320} placeholder="Describe Error"/>
                }
                <div className={styles.up}>
                    <div className={`${styles.option} ${styles.reject}`} >
                        <p>Reject</p>
                        <StatusCircleErrorXIcon />
                    </div>
                    <ChevronUpIcon onClick={() => closeOptional()}/>
                </div>
            </div> :  showModal ? <Modal action={handleShowModal}>
                <div className={styles.modal}>
                    <div className={styles.modal_wrapper}>
                        <div className={styles.close}>
                            <ChromeCloseIcon />
                        </div>
                        <WarningIcon />
                        <p>
                            Warning: When signing an invoice, be aware of the following responsibilities and cautions to avoid serious financial and legal consequences:
                        </p>
                        <div className={`${styles.option} ${styles.sign}`}>
                            <p>Sign</p>
                            <CheckMarkIcon />        
                        </div>
                    </div>
                </div>
            </Modal> 
            : 
            <div className={styles.check}>
                <div className={`${styles.option} ${styles.reject}`} onClick={() => openOptional()}>
                    <p>Reject</p>
                    <StatusCircleErrorXIcon />
                </div>
                <div className={`${styles.option} ${styles.sign}`} onClick={() => openModal()}>
                    <p>Sign</p>
                    <CheckMarkIcon />        
                </div>
            </div>
        }
    </div>
}