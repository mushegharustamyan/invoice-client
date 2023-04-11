import { IRawData } from "./utils/types";
import { IInvoicesRoutes } from "./utils/types";

const allInvoicesColumns: IRawData[] = [
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

const matchedInvoicesColumns: IRawData[] = [
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

const notMatchedInvoicesColumns = [
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

const underClarficationInvoicesColumns = [
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

export const invoicesRoutes: IInvoicesRoutes[] = [
  {
    path: "/invoices",
    title: "Imported Invoices",
    columns: allInvoicesColumns,
  },
  {
    path: "/invoices/matched",
    title: "Matched Invoices",
    columns: matchedInvoicesColumns,
    filterBy: ["matched"],
  },
  {
    path: "/invoices/not-matched",
    title: "Not Matched Invoices",
    columns: notMatchedInvoicesColumns,
    filterBy: ["not-matched"],
  },
  {
    path: "/invoices/under-clarification",
    title: "Under Clarification Invoices",
    columns: underClarficationInvoicesColumns,
    filterBy: ["under-clarification"],
  },
  {
    path: "/invoices/errors",
    title: "Errors Invoices",
    columns: matchedInvoicesColumns,
    filterBy: ["errors"],
  },
  {
    path: "/invoices/signed",
    title: "Signed Invoices",
    columns: matchedInvoicesColumns,
    filterBy: ["signed"],
  },
];

export const departmentInvoicesRoutes: IInvoicesRoutes[] = [
  {
    path: "/department",
    title: "Imported Invoices",
    columns: allInvoicesColumns,
    filterBy: ["matched", "signed"],
  },
  {
    path: "/department/approved",
    title: "Approved Invoices",
    columns: matchedInvoicesColumns,
    filterBy: ["signed"],
  },
  {
    path: "/department/in-progress",
    title: "In Progress Invoices",
    columns: matchedInvoicesColumns,
    filterBy: ["matched"],
  },
];
