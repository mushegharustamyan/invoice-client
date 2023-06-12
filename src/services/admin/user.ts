import { client } from "../axios"

export const getUsers = async () => {
    const response = await client.get("/admin/users")

    return response.data
}

export const editUser = async (id: number , roleId: number) => {
    await client.put(`/admin/users/${id}` , JSON.stringify({roleId}))
}

export const deleteUser = async (id: number) => {
    await client.delete(`/admin/users/${id}`)
}