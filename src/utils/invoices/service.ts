import { invoices } from "./data";
import { IDocument } from "../types";
import { IInvoiceFilters } from "../types";

export const getAllInvoices = ({ fields, dates }: IInvoiceFilters) => {
  return new Promise((resolve, reject) => {
    let result: IDocument[] = [];

    if (fields && fields[0]) {
      fields?.forEach((val) => {
        let data = invoices.filter((value) => value.status === val);
        result = [...result, ...data];
      });
    } else {
      result = invoices;
    }

    if (dates?.endDate && dates?.startDate) {
      const startDate = new Date(dates.startDate).getTime();
      const endDate = new Date(dates.endDate).getTime();
      result = result.filter((value) => {
        const invoiceDate = new Date(value.date).getTime();
        return invoiceDate >= startDate && invoiceDate <= endDate;
      });
    } else if (!(fields && fields[0])) {
      console.log(fields);
      result = invoices;
    }

    resolve(result);
  });
};
