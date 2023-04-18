import { useState } from "react"

export const SearchAbleSelect = () => {
  const [showOptions , setShowOptions] = useState(false)

  const [options , setOptions] = useState( ["company1" , "compan2" , "compan3" , "compan4"])

  const [search , setSearch] = useState("")

  const handleShowOptions = () => {
    setShowOptions(!showOptions)
  }



  const filterOptions = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)

    let newOptions: string[] = []

    if(search === "") setOptions(options) 
    else {
      newOptions = options.map((value, index , array) => {
        if(array[index].includes(e.target.value)) return value
      }).filter((value) => value !== undefined) as string[]
    }
    

    setOptions(newOptions)
  }

  return <div onClick={() => handleShowOptions()}>
    <input type="text" onChange={(e) => filterOptions(e)}/>
    {
      showOptions && <div>
        {
          options.map((value) => <p>{value}</p>)
        }
      </div>
    }
  </div>
}