import Page from "./components/dashboard/Page"
import Card from "./components/dashboard/users/Card"
import user from "./assets/dashboard/card-users.png"
import activeUsers from "./assets/dashboard/active-users.png"
import loanUsers from "./assets/dashboard/loan-users.png"
import savingsUsers from "./assets/dashboard/savings-users.png"
import PaginatedItems from "./components/dashboard/users/PaginatedItems"

export default function Users() {

    return (
     <Page title={"Users"}>
      <div className="users-container">
      <div className="analytics-container">
       <Card title={"Users"} count={"2,543"} src={user} className={"users"}/>
       <Card title={"Active Users"} count={"2,543"} src={activeUsers} className={"active-users"}/>  
       <Card title={"Users with Loans"} count={"2,543"} src={loanUsers} className={"loan-users"}/>
       <Card title={"Users with Savings"} count={"2,543"} src={savingsUsers} className={"saving-users"}/>
      </div>

      <PaginatedItems/>
      </div>
     </Page>
    )
}