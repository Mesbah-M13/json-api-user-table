import { VpnKeySharp } from "@material-ui/icons";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

const UserData = () => {
  const baseURL = "https://jsonplaceholder.typicode.com/users";
  const [Users, fetchUsers] = useState([]);

  const fetchUserData = async () => {
    const { data } = await axios.get(baseURL);
    fetchUsers(data);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex w-50 p-3 mx-auto">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search here for name & email..."
              aria-label="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </nav>
      <table className="table">
        <thead className=" table-info ">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Company Name</th>
            <th scope="col">Zipcode</th>
          </tr>
        </thead>
        <tbody>
          {Users.filter((val)=>{
            if (searchTerm === "") {
              return val;
            }else if(
              val.name.toLowerCase().includes(searchTerm.toLowerCase())||
              val.email.toLowerCase().includes(searchTerm.toLowerCase())
            ){
              return val;
            } 
          }).map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.company.name}</td>
                <td>{item.address.zipcode}</td>
              </tr>
            );
          })}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
