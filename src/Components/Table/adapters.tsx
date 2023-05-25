import { IDocument, IRawData } from "../../utils/types";
import { AddUser } from "../AddUser/AddUser";
import { Button } from "../Button/Button";
import { Download } from "../Download/Download";
import { ModifyUser } from "../ModifyUser/ModifyUser";

export const modifyColumns = (role: string | null , columns: IRawData[] , option?: "add" | "modify") => {
  const result = [...columns]
  switch(role) {
    case "admin":
      const dataRender = () => {
        if (option === "add") return <AddUser />
        console.log(option)
        return <ModifyUser />
      }
      result.push( {field: "", title: "", dataRender})
      break;
    case "accountant": 
      result.push( {field: "", title: "", dataRender: () => <Download />})
      break
  }

  return result
}

export const moidyData = (data: any[] , columns: IRawData[]) => {
  const result = data.map((value) => {
    return columns.map((column) => {
      if(column.field !== "") {
        return {value: value[column.field]}
      } else {
        return {value: column.dataRender && column.dataRender()}
      }
    })
  })

  return result
}