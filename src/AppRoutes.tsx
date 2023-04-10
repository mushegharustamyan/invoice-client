import { BrowserRouter , Routes , Route } from "react-router-dom";
import { LeftMenu } from "./Layouts/LeftMenu/LeftMenu";
import { Menu } from "./Layouts/Department/Menu";
import { InvoicesPage } from "./Pages/Documents/InvoicesPage";

export const AppRouter = () => {
  const allInvoicesColumns = ["Invoice Code" , "Price" , "Company" , "Status" , "Department"]
  const matchedInvoicesColumns = ["Invoice Code" , "Price" , "Company" , "Department"]
  const notMatchedInvoicesColumns = ["Invoice Code" , "Price" , "Company"]
  const underClarficationInvoicesColumns = ["Invoice Code" , "Price" , "Company"]

  const departmentPageColumns = ["Invoice Code" , "Price" , "Company" , "Status"]

  return (
    <BrowserRouter>
      <Routes>

        {/* Invoice Pages */}

        <Route element={<LeftMenu/>}>
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
              filterBy={["error"]}
              title="Error Invoices"/>}
            />
          <Route path="/invoices/signed" element={
            <InvoicesPage 
              showDepartment={true} 
              showStatus={true} 
              columns={matchedInvoicesColumns} 
              filterBy={["signed"]}
              title="Signed Invoices"/>}
            />
          <Route path="/invoices/not-matched" element={
            <InvoicesPage 
              showDepartment={false} 
              showStatus={false} 
              title="Not Matched Invoices" 
              filterBy={["not-matched"]}
              columns={notMatchedInvoicesColumns}/>}
            />
          <Route path="/invoices/matched" element={
            <InvoicesPage 
              showDepartment={true} 
              showStatus={false} 
              title="Matched Invoices" 
              filterBy={["matched"]}
              columns={matchedInvoicesColumns}/>} />
          <Route path="/invoices/under-clarification" element={
            <InvoicesPage 
              showDepartment={false}
              showStatus={false} 
              title="Under Clarificiation Invoices"
              filterBy={["under-clarification" ]}
              columns={underClarficationInvoicesColumns}/>} 
            />
        </Route> 

        
        <Route element={<Menu />}>
            <Route path="/department" element={
              <InvoicesPage 
              showDepartment={false}
              showStatus={true} 
              title="All Invoices"
              filterBy={["matched" , "signed"]}
              columns={departmentPageColumns}/>
            }/>
            <Route path="/department/approved" element={
              <InvoicesPage 
              showDepartment={false}
              showStatus={false} 
              title="Approved"
              filterBy={["signed"]}
              columns={underClarficationInvoicesColumns}/>
            }/>
            <Route path="/department/in-progress" element={
              <InvoicesPage 
              showDepartment={false}
              showStatus={false} 
              title="In Progress"
              filterBy={["matched"]}
              columns={underClarficationInvoicesColumns}/>
            }/>
            <Route path="/department/tickets" element={
              <InvoicesPage 
              showDepartment={false}
              showStatus={false} 
              title="In Progress"
              filterBy={["matched"]}
              columns={underClarficationInvoicesColumns}/>
            }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}