import { invoices } from "./data";
import { IDocument } from "../types";
import { IInvoiceFilters } from "../types";

export const getAllInvoices = ({ fields, dates }: IInvoiceFilters) => {
  return new Promise((resolve, reject) => {
    let result: IDocument[] = [];

    console.log(dates, fields);

    if (fields && fields[0]) {
      fields?.forEach((val) => {
        let data = invoices.filter((value) => value.status === val);
        result = [...result, ...data];
      });
    } else {
      result = invoices;
    }

    if (dates?.endDate && dates?.startDate) {
      console.log(dates.endDate, dates.startDate);
      result = result.filter((value) => {
        return value.date <= dates.startDate && value.date >= dates.endDate;
      });
    } else {
      result = invoices;
    }

    resolve(result);
  });
};

// export const filterInvoices = ({ fields, dates }: IInvoiceFilters) => {
//   return new Promise((resolve, reject) => {
//     let result: IDocument[] = [];

//     fields &&
//       fields?.forEach((val) => {
//         let data = invoices.filter((value) => value.status === val);
//         result = [...result, ...data];
//       });

//     dates?.endDate &&
//       dates?.startDate &&
//       (result = result.filter((value) => {
//         console.log("filter");
//         return value.date >= dates.startDate && value.date <= dates.endDate;
//       }));

//     resolve(result);
//   });
// };
