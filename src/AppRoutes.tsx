import { BrowserRouter , Routes , Route } from "react-router-dom";
import { LeftMenu } from "./Layouts/LeftMenu/LeftMenu";
import { InvoicesPage } from "./Pages/Documents/InvoicesPage";

export const AppRouter = () => {
  const allInvoicesColumns = ["Invoice Code" , "Price" , "Company" , "Status" , "Department"]
  const matchedInvoicesColumns = ["Invoice Code" , "Price" , "Company" , "Department"]
  const notMatchedInvoicesColumns = ["Invoice Code" , "Price" , "Company"]
  const underClarficationInvoicesColumns = ["Invoice Code" , "Price" , "Company"]

  return (
    <BrowserRouter>
      <Routes>

        {/* Invoices Pages */}

        <Route element={<LeftMenu />}>
          <Route path="/invoices" element={
            <InvoicesPage 
              showDepartment={true} 
              showStatus={true} 
              columns={allInvoicesColumns} 
              title="All Invoices"/>}
            />
          <Route path="/invoices/errors" element={
            <InvoicesPage 
              showDepartment={true} 
              showStatus={true} 
              columns={matchedInvoicesColumns} 
              filterBy="error"
              title="Error Invoices"/>}
            />
          <Route path="/invoices/signed" element={
            <InvoicesPage 
              showDepartment={true} 
              showStatus={true} 
              columns={matchedInvoicesColumns} 
              filterBy="signed"
              title="Signed Invoices"/>}
            />
          <Route path="/invoices/not-matched" element={
            <InvoicesPage 
              showDepartment={false} 
              showStatus={false} 
              title="Not Matched Invoices" 
              filterBy="not-matched"
              columns={notMatchedInvoicesColumns}/>}
            />
          <Route path="/invoices/matched" element={
            <InvoicesPage 
              showDepartment={true} 
              showStatus={false} 
              title="Matched Invoices" 
              filterBy="matched"
              columns={matchedInvoicesColumns}/>} />
          <Route path="/invoices/under-clarification" element={
            <InvoicesPage 
              showDepartment={false}
              showStatus={false} 
              title="Under Clarificiation Invoices"
              filterBy="under-clarification" 
              columns={underClarficationInvoicesColumns}/>} 
            />
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}