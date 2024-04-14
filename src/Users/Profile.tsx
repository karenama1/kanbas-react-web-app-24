import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({ username: "", password: "", 
    firstName: "", lastName: "", dob: "", email: "", role: "USER" });
  const navigate = useNavigate();

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  const save = async () => {
    await client.updateUser(profile);
  };
  const fetchProfile = async () => {
    const account = await client.profile();

      // Format the dob field
  if (account && account.dob) {
    const formattedDob = new Date(account.dob).toISOString().split('T')[0];
    setProfile({ ...account, dob: formattedDob });
  } else {

    setProfile(account);
  }
};
  useEffect(() => {
    fetchProfile();
  }, []);
return (
  <div>
    <h1>Profile</h1>
    {profile && (
      <div className="form">
    <Link to="/Kanbas/Account/Admin/Users"
       className="btn btn-warning w-100">
       Users
     </Link>
        <label>Username</label>
        <input value={profile.username} onChange={(e) =>
          setProfile({ ...profile, username: e.target.value })}/>

        <label >Password</label>
        <input value={profile.password} onChange={(e) =>
          setProfile({ ...profile, password: e.target.value })}/>

        <label>Firstname</label>
        <input value={profile.firstName} onChange={(e) =>
          setProfile({ ...profile, firstName: e.target.value })}/>
        
        <label>Lastname</label>
        <input value={profile.lastName} onChange={(e) =>
          setProfile({ ...profile, lastName: e.target.value })}/>

        <label>Date of birth</label>
        <input value={profile.dob} type="date" onChange={(e) =>
          setProfile({ ...profile, dob: e.target.value })}/>

        <label>Email</label>
        <input value={profile.email} onChange={(e) =>
          setProfile({ ...profile, email: e.target.value })}/>
        
        <select onChange={(e) =>
            setProfile({ ...profile, role: e.target.value })}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>

        <button className="btn btn-primary" onClick={save}>
            Save
        </button>

        <button className="btn btn-danger" onClick={signout}>
          Signout
        </button>
      </div>
    )}
  </div>
);
}
