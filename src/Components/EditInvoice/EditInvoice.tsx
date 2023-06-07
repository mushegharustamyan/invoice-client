import { useState } from "react"

import { Modal } from "../Modal/Modal"

import 
{ 
    CheckMarkIcon, 
    ChevronUpIcon, 
    ChromeCloseIcon, 
    StatusCircleErrorXIcon,
    WarningIcon 
}
from "@fluentui/react-icons-mdl2"

import styles from "./styles.module.css"
import { Button } from "../Button/Button"

export const EditInvoice = () => {
    const [showModal , setShowModal] = useState(false)
    const [showOptional , setShowOptional] = useState(false)
    const [showErrorInput , setShowErrorInput] = useState(false)
    const [showRejectModal , setShowRejectModal] = useState(false)

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

    const handleShowRejectModal = () => {
        setShowRejectModal(!showRejectModal)
    }

    return <div className={styles.container}>
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
        {
            showOptional && <div className={styles.options}>
                
                <div className={styles.error_container}>
                    <div className={styles.error}>
                        <input id="not_mine" type="radio" name="option"/>
                        <label htmlFor="not_mine">Not Mine</label>
                    </div>
                    <ChevronUpIcon onClick={() => closeOptional()}/>
                </div>
                <div className={styles.error}>
                    <input id="error" type="radio" onClick={() => hanldeShowErrorInput()} name="option"/>
                    <label htmlFor="error">Error</label>
                </div>
                <textarea className={styles.text_area}/>
                <Button width={180} text="Send" action={() => handleShowRejectModal()}/>
                
            </div>   
        }
        {
            showModal && <Modal action={handleShowModal}>
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
        }
        {
            showRejectModal && <Modal action={handleShowRejectModal}>
            <div className={styles.modal}>
                <div className={styles.modal_wrapper}>
                        <div className={styles.close}>
                            <ChromeCloseIcon />
                        </div>
                        <WarningIcon />
                        <p>
                            Warning: When rejecting an invoice, be aware of the following responsibilities and cautions to avoid serious financial and legal consequences:
                        </p>
                        <div className={`${styles.option} ${styles.reject}`}>
                            <p>Reject</p>
                            <StatusCircleErrorXIcon />
                        </div>
                    </div>
                </div>
            </Modal> 
        }
    </div>
}