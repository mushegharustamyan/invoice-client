export interface IDocument {
  [key: string]: any;
  id: number;
  invoiceCode: string;
  company: string;
  price: number;
  status:
    | "matched"
    | "not-matched"
    | "under-clarification"
    | "signed"
    | "error";
  department?: string;
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
