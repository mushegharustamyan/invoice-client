import { client } from "../axios"

export const getADusers = async () => {
    const response = await client.get("/admin/ad-users")

    return response.data
}

export const addUser = async (roleId: number , id: number) => {
    await client.post(`/admin/ad-users/${id}` , JSON.stringify({roleId}))
}