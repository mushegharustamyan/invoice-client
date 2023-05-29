import { BrowserRouter , Routes , Route } from "react-router-dom";
import { LeftMenu } from "../Layouts/LeftMenu/LeftMenu";
import { InvoicesPage } from "../Pages/AccountantInvoices/InvoicesPage";
import { invoicesRoutes , departmentInvoicesRoutes } from "./routes";
import { TicketsPage } from "../Pages/Tickets/TicketsPage";
import { navList } from "../Pages/AccountantInvoices/navList";
import { ticketsNavList } from "../Pages/Tickets/navList";
import { Login } from "../Components/Login/Login";
import { AuthLayout } from "../Layouts/AuthLayout/AuthLayout";
import { AdminPage } from "../Pages/Admin/Admin";
import { DepartmentInvoicesPage } from "../Pages/DepartmentInvoices/DepartmentInvoices";

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
                console.log(value.showInvoiceActions)
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