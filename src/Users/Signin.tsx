import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
import "./index.css";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  return (
    <div className="container-fluid">
      <h1>Signin</h1>
      <label htmlFor="username">UserName</label>
      <input id="username" value={credentials.username} onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })}/>
      <label htmlFor="password">Password</label>
      <input id="password" value={credentials.password} onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}/>
      <button className="btn btn-primary" onClick={signin}> Signin </button>
    </div>
  );
}
