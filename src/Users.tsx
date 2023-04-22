import Page from "./components/dashboard/Page"
import Card from "./components/dashboard/Card"
import user from "./assets/dashboard/card-users.png"

export default function Users() {

    return (
     <Page>
      <h1>Users</h1>

      <div className="container">
      <div className="analytics-container">
  
       <Card title={"Users"} count={1234} src={user} />
       <Card title={"Active Users"} count={1234} src={user} />
      
      <Card title={"Users with Loans"} count={1234} src={user} />
      <Card title={"Users with"} count={1234} src={user} />
        </div>
      </div>
     </Page>
    )
}