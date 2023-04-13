import { tickets } from "./data";

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
