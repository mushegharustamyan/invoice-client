import { BrowserRouter , Routes , Route } from "react-router-dom";

import { InvoicesPage } from "../Pages/AccountantInvoices/InvoicesPage";
import { TicketsPage } from "../Pages/Tickets/TicketsPage";
import { AdminPage } from "../Pages/Admin/Admin";
import { DepartmentInvoicesPage } from "../Pages/DepartmentInvoices/DepartmentInvoices";
import { Login } from "../Components/Login/Login";

import { navList } from "../Pages/AccountantInvoices/navList";
import { ticketsNavList } from "../Pages/Tickets/navList";

import { invoicesRoutes , departmentInvoicesRoutes } from "./routes";

import { AuthLayout } from "../Layouts/AuthLayout/AuthLayout";
import { MainLayout } from "../Layouts/MainLayout/MainLayout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route element={<MainLayout navList={navList}/>}>
            <Route element={<Login />} path="/"/>
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
          <Route element={<MainLayout navList={ticketsNavList}/>}>
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
        <Route element={<MainLayout />}>
          <Route path="/admin" element={<AdminPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}