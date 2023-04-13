import { invoices } from "./data";
import { IDocument } from "../types";

export const getAllInvoices = () => {
  return new Promise((resolve, reject) => {
    resolve(invoices);
  });
};

export const filterInvoices = (target: string[]) => {
  return new Promise((resolve, reject) => {
    let result: IDocument[] = [];

    target.forEach((val) => {
      let data = invoices.filter((value) => value.status === val);
      result = [...result, ...data];
    });

    resolve(result);
  });
};
