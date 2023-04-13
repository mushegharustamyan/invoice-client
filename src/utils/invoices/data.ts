import { IDocument, IRawData } from "../types";

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
  {
    id: 5,
    invoiceCode: "C45",
    price: 5000,
    company: "Company Name",
    status: "signed",
  },
];

export const allInvoicesColumns: IRawData[] = [
  {
    title: "Invoice Code",
    field: "invoiceCode",
  },
  {
    title: "Price",
    field: "price",
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
];

export const matchedInvoicesColumns: IRawData[] = [
  {
    title: "Invoice Code",
    field: "invoiceCode",
  },
  {
    title: "Price",
    field: "price",
  },
  {
    title: "Company",
    field: "company",
  },
  {
    title: "Department",
    field: "department",
  },
];

export const notMatchedInvoicesColumns = [
  {
    title: "Invoice Code",
    field: "invoiceCode",
  },
  {
    title: "Price",
    field: "price",
  },
  {
    title: "Company",
    field: "company",
  },
];

export const underClarficationInvoicesColumns = [
  {
    title: "Invoice Code",
    field: "invoiceCode",
  },
  {
    title: "Price",
    field: "price",
  },
  {
    title: "Company",
    field: "company",
  },
];
