import { INavigation } from "../../utils/types";

export const navList: INavigation[] = [
  {
    title: "All Imported",
    path: "/invoices",
    subMenu: [
      {
        title: "Matched",
        path: "/invoices/matched",
        permissions: ["admin"],
      },
      {
        title: "In Progress",
        path: "/invoices/in-progress",
        subMenu: [
          {
            title: "Not Matched",
            path: "/invoices/not-matched",
            permissions: ["admin"],
          },
          {
            title: "Under Clarification",
            path: "/invoices/under-clarification",
            permissions: ["admin"],
          },
        ],
        permissions: ["admin"],
      },
    ],
    permissions: ["admin"],
  },
  {
    title: "Signed Invoices",
    path: "/invoices/signed",
    permissions: ["admin"],
  },
  {
    title: "Error Invoices",
    path: "/invoices/errors",
    permissions: ["admin"],
  },
];
