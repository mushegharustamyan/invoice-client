import { invoices } from "./data";
import { IDocument } from "../types";
import { IInvoiceFilters } from "../types";

export const getAllInvoices = ({
  fields,
  startDate,
  endDate,
  field,
  value
}: IInvoiceFilters) => {
  return new Promise((resolve) => {
    let result: IDocument[] = [];

    if (fields && fields[0]) {
      fields?.forEach((val) => {
        let data = invoices.filter((value) => value.status === val);
        result = [...result ,...data]
      });
    } else {
      result = invoices
    }

    // if(fillters) {
    //   if (fillters?.dates?.endDate && fillters?.dates?.startDate) {
    //     const startDate = new Date(fillters.dates.startDate).getTime();
    //     const endDate = new Date(fillters.dates.endDate).getTime();
    //     result = filterInvoicesByDate(startDate , endDate , result)
    //   }
    // }

    // if (dates?.endDate && dates?.startDate) {
      // const startDate = new Date(dates.startDate).getTime();
      // const endDate = new Date(dates.endDate).getTime();
      // result = result.filter((value) => {
      //   const invoiceDate = new Date(value.date).getTime();
      //   return invoiceDate >= startDate && invoiceDate <= endDate;
      // });
    // } else if (!(fields && fields[0])) {
    //   result = invoices;
    // }

    // if (filteration) {
    //   result = result.filter((value) => {
    //     return value[filteration.field] === filteration.value;
    //   });
    // }

    resolve(result);
  });
};

const filterInvoicesByDate = (startDate: number , endDate: number , data: IDocument[]) => {
  data = data.filter((value) => {
    const invoiceDate = new Date(value.date).getTime();
    return invoiceDate >= startDate && invoiceDate <= endDate;
  });

  return data
}

export const getCompanies = () => {
  const companies = invoices.map((value) => {
    return value.company;
  });

  const companiesSet = new Set();

  companies.forEach((value) => {
    companiesSet.add(value);
  });

  return Array.from(companiesSet);
};

export const getDepartments = () => {
  const departments = invoices.map((value) => {
    return value.department;
  });

  const departmentsSet = new Set();

  departments.forEach((value) => {
    if (value) departmentsSet.add(value);
  });

  return Array.from(departmentsSet);
};

export const getAmounts = () => {
  const amounts = invoices.map((value) => {
    return value.amount;
  });

  const amountsSet = new Set();

  amounts.forEach((value) => {
    amountsSet.add(value);
  });

  return Array.from(amountsSet);
};

export const statuses = [
  "matched",
  "not-matched",
  "under-clarification",
  "signed",
  "error",
];
