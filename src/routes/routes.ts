import { IInvoicesRoutes } from "../utils/types";
import {
  allInvoicesColumns,
  matchedInvoicesColumns,
  notMatchedInvoicesColumns,
  underClarficationInvoicesColumns,
} from "../utils/invoices/data";

export const invoicesRoutes: IInvoicesRoutes[] = [
  {
    path: "/invoices",
    title: "Imported Invoices",
    columns: allInvoicesColumns,
    filterBy: [],
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
  {
    path: "/invoices/in-progress",
    title: "In Progress Invoices",
    columns: matchedInvoicesColumns,
    filterBy: ["not-matched", "under-clarification"],
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
