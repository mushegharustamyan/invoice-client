import { BrowserRouter , Routes , Route } from "react-router-dom";

import { InvoicesPage } from "../Pages/AccountantInvoices/InvoicesPage";
import { TicketsPage } from "../Pages/Tickets/TicketsPage";
import { AdminPage } from "../Pages/Admin/Admin";
import { DepartmentInvoicesPage } from "../Pages/DepartmentInvoices/DepartmentInvoices";
import { Login } from "../Components/Login/Login";

import { navList } from "../Pages/AccountantInvoices/navList";
import { LeftMenu } from "../Layouts/LeftMenu/LeftMenu";
import { ticketsNavList } from "../Pages/Tickets/navList";

import { invoicesRoutes , departmentInvoicesRoutes } from "./routes";

import { AuthLayout } from "../Layouts/AuthLayout/AuthLayout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route element={<Login />} path="/"/>
          <Route element={<LeftMenu navList={navList}/>}>
            {
              invoicesRoutes.map((value , index) => {
                return (
                  <Route key={index}
                  path={value.path}
                  element={<InvoicesPage title={value.title} columns={value.columns} filterBy={value.filterBy} key={index}/>}
                  />
                )
              })
            }
          </Route>
          <Route element={<LeftMenu navList={ticketsNavList}/>}>
            {
              departmentInvoicesRoutes.map((value, index) => {
                return (
                  <Route 
                  key={index}
                  path={value.path}
                  element={<DepartmentInvoicesPage title={value.title} showInvoiceActions={value.showInvoiceActions} columns={value.columns} filterBy={value.filterBy} key={index
                  }/>}
                  />
                )
              })
            }
            <Route path="/department/tickets" element={<TicketsPage title="Tickets"/>} />
          </Route>
        </Route>
        <Route path="/admin" element={<AdminPage />}/>
      </Routes>
    </BrowserRouter>
  )
}