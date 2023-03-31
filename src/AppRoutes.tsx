import { BrowserRouter , Routes , Route } from "react-router-dom";
import { LeftMenu } from "./Layouts/LeftMenu/LeftMenu";
import { DocumentsPage } from "./Pages/Documents/DocumentsPage";
import { LoginPage } from "./Pages/Login/LoginPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LeftMenu />}>
          <Route path="/invoices" element={<DocumentsPage showStatus={true} title="All Invoices"/>}/>
          <Route path="/invoices/not-matched" element={<DocumentsPage title="Not Matched Invoices"/>} />
          <Route path="/invoices/matched" element={<DocumentsPage title="Matched Invoices"/>} />
          <Route path="/invoices/under-clarification" element={<DocumentsPage title="Under Clarificiation Invoices"/>} />
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}