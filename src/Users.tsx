import Page from "./components/dashboard/Page"
import Card from "./components/dashboard/Card"
import user from "./assets/dashboard/card-users.png"
import activeUsers from "./assets/dashboard/active-users.png"
import loanUsers from "./assets/dashboard/loan-users.png"
import savingsUsers from "./assets/dashboard/savings-users.png"
import PaginatedItems from "./components/dashboard/PaginatedItems"

export default function Users() {

    return (
     <Page title={"Users"}>
      <div className="users-container">
      <div className="analytics-container">
       <Card title={"Users"} count={1234} src={user} className={"users"}/>
       <Card title={"Active Users"} count={1234} src={activeUsers} className={"active-users"}/>  
       <Card title={"Users with Loans"} count={1234} src={loanUsers} className={"loan-users"}/>
       <Card title={"Users with Savings"} count={1234} src={savingsUsers} className={"saving-users"}/>
      </div>

      <PaginatedItems/>
      </div>
     </Page>
    )
}