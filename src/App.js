import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UsersList";

function App() {
  const [userslist, setUserList] = useState([]);
  const addUserHandeler = (userName, userAge) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { name: userName, age: userAge, id: userslist.length },
      ];
    });
  };
  console.log(userslist);
  return (
    <div>
      <AddUser onAddUser={addUserHandeler} />
      <UserList users={userslist}/>
    </div>
  );
}

export default App;
