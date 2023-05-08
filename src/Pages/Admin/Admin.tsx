import { useState } from "react"
import { Layout } from "../../Components/Layout/Layout"
import { IRawData } from "../../utils/types"

export const AdminPage = () => {
  const columns: IRawData[] = [
    {
      title: "Username",
      field: "username"
    },
  ]

  const data = [
    {
      username: "username1"
    }
  ]

  const [itemsCount , setItemsCount] = useState(3)
  const [pagesCount, setPagesCount] = useState(0)
  const [selectedPage, setSelectedPage] = useState(1)
  const passingData = data.slice((selectedPage - 1) * itemsCount ,selectedPage * itemsCount)

  

  return <div>
    <Layout columns={columns} data={passingData}/>
  </div>
}