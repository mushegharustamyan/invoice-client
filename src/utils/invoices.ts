import { IDocument } from "./types";

export const invoices: IDocument[] = [
  {
    id: 1,
    invoiceCode: "C45",
    price: 5000,
    company: "Company Name",
    status: "matched",
    department: "Department",
  },
  {
    id: 2,
    invoiceCode: "C45",
    price: 5000,
    company: "Company Name",
    status: "matched",
    department: "Department",
  },
  {
    id: 3,
    invoiceCode: "C45",
    price: 5000,
    company: "Company Name",
    status: "not-matched",
  },
  {
    id: 4,
    invoiceCode: "C45",
    price: 5000,
    company: "Company Name",
    status: "under-clarification",
  },
];

export const getAllInvoices = () => {
  return new Promise((resolve, reject) => {
    resolve(invoices);
  });
};

export const filterInvoices = (target: string) => {
  return new Promise((resolve, reject) => {
    const result = invoices.filter((value) => value.status === target);
    resolve(result);
  });
};
