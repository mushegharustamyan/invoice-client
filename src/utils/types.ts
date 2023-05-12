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
  permissions: string[];
}

export interface IInvoiceFilters {
  [key: string]: any;
  dates: {
    [key: string]: any;
    startDate?: string;
    endDate?: string;
  };
  filterBy: { [key: string]: any; field: string; value: string }[];
}

export interface IChildrenProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface IUser {
  role: string | null;
  token: string | null;
}

export interface IRole {
  access_level: number
  name : string
}