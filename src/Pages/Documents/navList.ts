import { INavigation } from "../../utils/types";

export const navList: INavigation[] = [
  {
    title: "All Imported",
    path: "/invoices",
    subMenu: [
      {
        title: "Matched",
        path: "/invoices/matched",
      },
      {
        title: "In Progress",
        path: "/invoices/in-progress",
        subMenu: [
          {
            title: "Not Matched",
            path: "/invoices/not-matched",
          },
          {
            title: "Untder Clarification",
            path: "/invoices/under-clarification",
          },
        ],
      },
    ],
  },
  {
    title: "Signed Invoices",
    path: "/invoices/signed",
  },
  {
    title: "Error Invoices",
    path: "/invoices/errors",
  },
];
