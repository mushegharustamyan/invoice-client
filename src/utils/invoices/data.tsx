import { IDocument, IRawData } from "../types";
import { Select } from "../../Components/Select/Select";
import { getAmounts, getCompanies, getDepartments } from "./service";
import { statuses } from "./service";
import { SearchAbleSelect } from "../../Components/SearchAbleSelect/SearchAbleSelect";

export const invoices: IDocument[] = [
  {
    id: 1,
    invoiceCode: "A78",
    amount: 5000,
    company: "Company Name1",
    status: "matched",
    department: "Department1",
    date: "2023-02-12",
  },
  {
    id: 2,
    invoiceCode: "A4896",
    amount: 4000,
    company: "Company Name2",
    status: "not-matched",
    department: "Department3",
    date: "2023-03-12",
  },
  {
    id: 3,
    invoiceCode: "A78",
    amount: 78000,
    company: "Company Name1",
    status: "matched",
    department: "Department1",
    date: "2023-07-12",
  },
  {
    id: 4,
    invoiceCode: "B47",
    amount: 6400,
    company: "Company Name2",
    status: "under-clarification",
    department: null,
    date: "2023-02-12",
  },
  {
    id: 5,
    invoiceCode: "B967",
    amount: 12500,
    company: "Company Name3",
    status: "signed",
    department: "Department2",
    date: "2023-05-12",
  },
  {
    id: 6,
    invoiceCode: "A159",
    amount: 5000,
    company: "Company Name4",
    status: "matched",
    department: "Department1",
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
    render: () => <SearchAbleSelect options={getAmounts() as string[]} title="Amount"/> 
  },
  {
    title: "Company",
    field: "company",
    render: () => <SearchAbleSelect options={getCompanies() as string[]} title="Company"/>
  },
  {
    title: "Status",
    field: "status",
    render: () => <SearchAbleSelect options={statuses} title="Status" />
  },
  {
    title: "Department",
    field: "department",
    render: () => <SearchAbleSelect options={getDepartments() as string[]} title="Department" />
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
    render: () => <SearchAbleSelect options={getAmounts() as string[]} title="Amount"/>
  },
  {
    title: "Company",
    field: "company",
    render: () => <SearchAbleSelect options={getCompanies() as string[]} title="Company"/>
  },
  {
    title: "Department",
    field: "department",
    render: () => <SearchAbleSelect options={getDepartments() as string[]} title="Department" />
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
    render: () => <SearchAbleSelect options={getAmounts() as string[]} title="Amount"/>
  },
  {
    title: "Company",
    field: "company",
    render: () => <SearchAbleSelect options={getCompanies() as string[]} title="Company"/>
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
    render: () => <SearchAbleSelect options={getAmounts() as string[]} title="Amount"/>
  },
  {
    title: "Company",
    field: "company",
    render: () => <SearchAbleSelect options={getCompanies() as string[]} title="Company"/>
  },
  {
    title: "Date",
    field: "date",
  },
  
];
