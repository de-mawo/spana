import Login from "./Login";

export default async function Home() {
  
  
    return (
      <div className=" d-flex align-items-center justify-content-center vh-100 pt_100 home_pg">
      <main className="auth_form">
      <Login/>
      </main>
    </div>
 
    )
  }