import { INavigation } from "../../utils/types";

export const ticketsNavList: INavigation[] = [
  {
    title: "All Invoices",
    path: "department",
    permissions: ['admin']
  },
  {
    title: "Approved Invoices",
    path: "/department/approved",
    permissions: ['admin']
  },
  {
    title: "In Progress",
    path: "/department/in-progress",
    permissions: ['admin']
  },
  {
    title: "Tickets",
    path: "/department/tickets",
    permissions: ['admin']
  }
]