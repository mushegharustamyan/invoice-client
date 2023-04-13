import { INavigation } from "../../utils/types";

export const ticketsNavList: INavigation[] = [
  {
    title: "All Invoices",
    path: "department",
  },
  {
    title: "Approved Invoices",
    path: "/department/approved",
  },
  {
    title: "In Progress",
    path: "/department/in-progress",
  },
  {
    title: "Tickets",
    path: "/department/tickets",
  }
]