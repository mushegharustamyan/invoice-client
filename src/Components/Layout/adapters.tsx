import { IDocument, IRawData } from "../../utils/types";
import { Download } from "../Download/Download";

export const modifyColumns = (role: string | null , columns: IRawData[]) => {
  const result = [...columns]
  switch(role) {
    case "admin":
      result.push( {field: "", title: "", dataRender: () => <Download />})
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