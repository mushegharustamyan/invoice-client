import { client } from "../axios"

export const getRoles = async () => {
    const response = await client.get("http://localhost:5001/admin/roles")

    return response
}