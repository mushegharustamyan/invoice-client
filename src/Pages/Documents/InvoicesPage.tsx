import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { IDocument } from "../../utils/types"

import { Card } from "../../Components/Card/Card"
import { SearchPanel } from "../../Components/SearchPanel/SearchPanel"
import { filter } from "./helper"

import { filterInvoices, getInvoices } from "../../store/reducers/invoiceSlice"
import { RootState } from "../.."

import styles from "./styles.module.css"
import down from "../../assets/img/down-icon-blue.png"
import { Layout } from "../../Components/Layout/Layout"
import { useLocation } from "react-router"

interface IProps {
  title: string
  columns: string[]
  showDepartment: boolean
  showStatus: boolean
  filterBy?: string
}

export const InvoicesPage = ({title , columns , showDepartment , showStatus, filterBy}: IProps) => {
  const location = useLocation()

  const dispatch = useDispatch()
  let columnWidth = 100 / columns.length + 1;
  
  useEffect(() => {
    dispatch(getInvoices())

    if(filterBy) {
      console.log(location.pathname.split("/")[2])
      dispatch(filterInvoices({action:{ payload: location.pathname.split("/")[2]}}))
    }
  } , [])

  let data = useSelector<RootState>(state => state.invoiceReducer.data) as IDocument[]
  
  console.log(data)

  

  return (
    <div className={styles.cards}>
      <div className={styles.wrapper}>
        <p className={styles.page_title}>{title}</p>
        <div className={styles.panel}>
          <SearchPanel  icon={down}/>
        </div>
        <Layout data={data} showDepartment={showDepartment} showStatus={showStatus} columns={columns}/>
      </div>
    </div>
  )
}