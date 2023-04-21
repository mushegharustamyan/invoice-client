type InvoiceStatus =
  | "matched"
  | "not-matched"
  | "under-clarification"
  | "signed"
  | "error";

export interface IDocument {
  [key: string]: any;
  id: number;
  invoiceCode: string;
  company: string;
  amount: number;
  status: InvoiceStatus;
  department: string | null;
  date: string;
}

export interface ITicket {
  [key: string]: any;
  id: number;
  description: string;
}

export interface IRawData {
  title: string;
  field: string;
  render?: () => JSX.Element;
}

export interface IInvoicesRoutes {
  path: string;
  title: string;
  columns: IRawData[];
  filterBy?: string[];
}

export interface INavigation {
  title: string;
  path: string;
  subMenu?: INavigation[];
}

export interface IInvoiceFilters {
  [key: string]: any;
  fields?: string[];
  dates?: {
    startDate?: string,
    endDate?: string
  }
  filterBy?: {field: string , value: string}[]
}
