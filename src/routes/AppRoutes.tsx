import { BrowserRouter , Routes , Route } from "react-router-dom";
import { LeftMenu } from "../Layouts/LeftMenu/LeftMenu";
import { InvoicesPage } from "../Pages/Documents/InvoicesPage";
import { invoicesRoutes , departmentInvoicesRoutes } from "./routes";
import { TicketsPage } from "../Pages/Tickets/TicketsPage";
import { navList } from "../Pages/Documents/navList";
import { ticketsNavList } from "../Pages/Tickets/navList";
import { Login } from "../Components/Login/Login";
import path from "path";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/"/>
        <Route element={<LeftMenu navList={navList}/>}>
          {
            invoicesRoutes.map((value , index) => {
              return (
                <Route key={index}
                path={value.path}
                element={<InvoicesPage title={value.title} columns={value.columns} filterBy={value.filterBy}/>}
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
                element={<InvoicesPage title={value.title} columns={value.columns} filterBy={value.filterBy}/>}
                />
              )
            })
          }
          <Route path="/department/tickets" element={<TicketsPage title="Tickets"/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}