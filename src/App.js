import { List, TextField } from "@material-ui/core";
import React, { useState } from "react";
import UserData from "./Components/UserData";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@mui/material/IconButton";


function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="container p-4">

      {/* <div className="search">
        
        <TextField
          className="d-flex w-50 mx-auto"
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          label="Search here for name & email...."
        />
        
      </div> */}
      

      <UserData />
    </div>
  );
}
export default App;
