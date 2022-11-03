import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css'
const UserList = (props) => {
  return (
    <Card className={classes.users}>
    <ul>
      {props.users.map((eachUser) => (
        <li key={eachUser.id}>
          {eachUser.name}({eachUser.age} is years old)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UserList;
