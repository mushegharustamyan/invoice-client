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
  render?: () => JSX.Element
}

export interface ITicket {
  [key: string]: any;
  id: number;
  description: string;
}

export interface IRawData {
  title: string;
  field: string;
  render?: (ref? : unknown) => JSX.Element;
  dataRender?: (id: number) => JSX.Element
}

export interface IInvoicesRoutes {
  path: string;
  title: string;
  columns: IRawData[];
  filterBy?: string[];
  showInvoiceActions?: boolean
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

export interface IAuth {
  role: string | null;
  token: string | null;
}

export interface IRole {
  id: number
  access_level: number
  name : string
}

export interface IADUser {
  SID: number
  username: string
  password: string
  email: string
  departmentId: string
}

export interface IUser {
  SID: number
  username: string
  password: string
  email: string
  departmentId: string
  role: string
}