import { IRawData, ITicket } from "./types";

const tickets: ITicket[] = [
  {
    id: 1,
    description: "description",
  },
];

export const getAllTickets = () => {
  return new Promise((resolve, reject) => {
    resolve(tickets);
  });
};

export const addTicket = (description: string) => {
  return new Promise((resolve, reject) => {
    resolve(description);
  });
};

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
