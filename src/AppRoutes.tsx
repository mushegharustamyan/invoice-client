import { BrowserRouter , Routes , Route } from "react-router-dom";
import { LeftMenu } from "./Layouts/LeftMenu/LeftMenu";
import { Menu } from "./Layouts/Department/Menu";
import { InvoicesPage } from "./Pages/Documents/InvoicesPage";
import { invoicesRoutes , departmentInvoicesRoutes } from "./routes";
import { TicketsPage } from "./Pages/Tickets/TicketsPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LeftMenu/>}>
          {
            invoicesRoutes.map((value) => {
              return (
                <Route 
                path={value.path}
                element={<InvoicesPage title={value.title} columns={value.columns} filterBy={value.filterBy}/>}
                />
              )
            })
          }
        </Route>
        <Route element={<Menu />}>
          {
            departmentInvoicesRoutes.map((value) => {
              return (
                <Route 
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