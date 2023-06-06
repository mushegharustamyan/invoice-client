import { client } from "../axios"

export const getInvoices = (startDate? : string , endDate?: string) => {
    client.get("/")
}