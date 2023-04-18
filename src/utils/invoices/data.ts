import { IDocument, IRawData } from "../types";

export const invoices: IDocument[] = [
  {
    id: 1,
    invoiceCode: "C45",
    amount: 5000,
    company: "Company Name",
    status: "matched",
    department: "Department",
    date: "2023-02-12",
  },
  {
    id: 2,
    invoiceCode: "C45",
    amount: 5000,
    company: "Company Name",
    status: "not-matched",
    department: "Department",
    date: "2023-03-12",
  },
  {
    id: 3,
    invoiceCode: "C45",
    amount: 5000,
    company: "Company Name",
    status: "matched",
    department: "Department",
    date: "2023-07-12",
  },
  {
    id: 4,
    invoiceCode: "C45",
    amount: 5000,
    company: "Company Name",
    status: "under-clarification",
    department: null,
    date: "2023-02-12",
  },
  {
    id: 5,
    invoiceCode: "C45",
    amount: 5000,
    company: "Company Name",
    status: "signed",
    department: "Department",
    date: "2023-05-12",
  },
  {
    id: 6,
    invoiceCode: "C45",
    amount: 5000,
    company: "Company Name",
    status: "matched",
    department: "Department",
    date: "2023-07-12",
  },
];

export const allInvoicesColumns: IRawData[] = [
  {
    title: "Invoice Code",
    field: "invoiceCode",
  },
  {
    title: "Amount",
    field: "amount",
  },
  {
    title: "Company",
    field: "company",
  },
  {
    title: "Status",
    field: "status",
  },
  {
    title: "Department",
    field: "department",
  },
  {
    title: "Date",
    field: "date",
  },
];

export const matchedInvoicesColumns: IRawData[] = [
  {
    title: "Invoice Code",
    field: "invoiceCode",
  },
  {
    title: "Amount",
    field: "amount",
  },
  {
    title: "Company",
    field: "company",
  },
  {
    title: "Department",
    field: "department",
  },
  {
    title: "Date",
    field: "date",
  },
];

export const notMatchedInvoicesColumns: IRawData[] = [
  {
    title: "Invoice Code",
    field: "invoiceCode",
  },
  {
    title: "Amount",
    field: "amount",
  },
  {
    title: "Company",
    field: "company",
  },
  {
    title: "Date",
    field: "date",
  },
];

export const underClarficationInvoicesColumns: IRawData[] = [
  {
    title: "Invoice Code",
    field: "invoiceCode",
  },
  {
    title: "Amount",
    field: "amount",
  },
  {
    title: "Company",
    field: "company",
  },
  {
    title: "Date",
    field: "date",
  },
];
