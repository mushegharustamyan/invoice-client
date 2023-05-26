import { client } from "../axios"

export const getUsers = async () => {
    const response = await client.get("http://localhost:5001/admin/users")

    console.log(response.data)

    return response.data
}

export const editUser = async (id: number , roleId: number) => {
    await client.put(`http://localhost:5001/admin/users/${id}` , JSON.stringify({roleId}))
}

export const deleteUser = async (id: number) => {
    await client.delete(`http://localhost:5001/admin/users/${id}`)
}