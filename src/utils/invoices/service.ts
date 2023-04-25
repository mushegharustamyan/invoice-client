import { invoices } from "./data";
import { IDocument } from "../types";
import { IInvoiceFilters } from "../types";

export const getAllInvoices = ({ fields }: { fields: string[] }) => {
  return new Promise((resolve) => {
    let result: IDocument[] = [];

    if (fields && fields[0]) {
      fields?.forEach((val) => {
        let data = invoices.filter((value) => value.status === val);
        result = [...result, ...data];
      });
    } else {
      result = invoices;
    }

    resolve(result);
  });
};

export const filterInvoices = (options: IInvoiceFilters) => {
  return new Promise((resolve, reject) => {
    const { startDate, endDate } = options.dates;

    let result: IDocument[] = invoices;

    if (startDate && endDate) {
      const data = filterInvoicesByDate(
        new Date(startDate).getTime(),
        new Date(endDate).getTime(),
        result
      );
      result = [...data];
    }

    if (options.filterBy.length) {
      options.filterBy.forEach((value) => {
        const data = filterInvoicesBySelectedFields(value, result);
        result = [...data];
      });
    }

    resolve(result);
  });
};

const filterInvoicesByDate = (
  startDate: number,
  endDate: number,
  data: IDocument[]
) => {
  data = data.filter((value) => {
    const invoiceDate = new Date(value.date).getTime();
    return invoiceDate >= startDate && invoiceDate <= endDate;
  });

  return data;
};

export const filterInvoicesBySelectedFields = (
  options: { field: string; value: any },
  data: IDocument[]
) => {
  const result = data.filter((value) => {
    if (value[options.field] && value[options.field] === options.value)
      return value;
  });

  return result;
};

export const isExist = (
  { field, value }: { field: string; value: any },
  data: { field: string; value: any }[]
) => {
  let result = false;
  data.forEach((val) => {
    if (val.field === field && val.value === value) result = true;
  });

  return result;
};

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
