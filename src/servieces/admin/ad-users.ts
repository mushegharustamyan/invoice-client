import { client } from "../axios"

export const getADusers = async () => {
    const response = await client.get("http://localhost:5001/admin/ad-users")

    return response.data
}