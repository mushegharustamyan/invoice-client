export interface IDocument {
  id: number;
  invoiceCode: string;
  company: string;
  price: number;
  status: "matched" | "not-matched" | "under-clarification";
  department?: string;
}
