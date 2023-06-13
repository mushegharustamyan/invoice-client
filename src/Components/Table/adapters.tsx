import { IDocument, IRawData } from "../../utils/types";
import { AddUser } from "../AddUser/AddUser";
import { Button } from "../Button/Button";
import { Download } from "../Download/Download";
import { ModifyUser } from "../ModifyUser/ModifyUser";
import { EditInvoice } from "../EditInvoice/EditInvoice";
import { amountFormating } from "../../common/helpers";

export const modifyColumns = (role: string | null , columns: IRawData[] , option?: "add" | "modify") => {
  const result = [...columns]
  switch(role) {
    case "admin":
      const dataRender = (id: number) => {
        if (option === "add") return <AddUser id={id}/>
        return <ModifyUser id={id}/>
      }
      result.push( {field: "", title: "", dataRender})
      break;
    case "accountant": 
      result.push( {field: "", title: "", dataRender: () => <Download />})
      break
  }

  return result
}

export const modifyData = (data: any[] , columns: IRawData[]) => {
  const result = data.map((value) => {
    return columns.map((column) => {
      if(column.field !== "") {
        if(column.field === "role") {
          return {value: value[column.field].name}
        }
        if(column.field === "amount") {
          return {value: amountFormating(value[column.field])}
        }
        return {value: value[column.field]}
      } else {
        return {value: column.dataRender && column.dataRender(value.id)}
      }
    })
  })

  return result
}