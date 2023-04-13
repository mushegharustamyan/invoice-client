import { IRawData, ITicket } from "../types";

export const tickets: ITicket[] = [
  {
    id: 1,
    description: "description",
  },
];

export const ticketsColumns: IRawData[] = [
  {
    title: "ID",
    field: "id",
  },
  {
    title: "Description",
    field: "description",
  },
];
