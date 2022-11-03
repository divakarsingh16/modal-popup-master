import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
const [error,setError]=useState();

  const addUserHandeler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title:'Invalid Input',
        message:'please enter a valid name and age (non-empty-values).'
      });
      return 
    }
    if (+enteredUserAge < 1) {
      setError({
        title:'Invalid age',
        message:'please enter a valid age (> 0).'
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUserName("");
  };
  const userNameChangeHandeler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const userAgeChangeHandeler = (event) => {
    setEnteredUserAge(event.target.value);
  };
    const errorHandeler=()=>{
      setError(null)
    }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandeler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandeler}>
          <label htmlFor="userName">User Name</label>
          <input
            onChange={userNameChangeHandeler}
            value={enteredUserName}
            id="userName"
            type="text"
          />
          <label htmlFor="Age">Age</label>
          <input
            onChange={userAgeChangeHandeler}
            value={enteredUserAge}
            id="Age"
            type="number"
          />
          <Button type="submit">AddUser</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
