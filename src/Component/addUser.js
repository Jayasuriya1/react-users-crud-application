import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../baseApp";
import { AppState } from "../Context/AppProvider";

export default function AddUser() {
  const { users, setUsers } = AppState();
  const history = useHistory();

  const [id, setIdx] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = () => {
    const newData = {
      id,
      name,
      email,
    };
    console.log(users);
    console.log(newData);
    console.log(...users, newData);
    setUsers([...users, newData]);
    history.push("/");
  };
  return (
    <BaseApp>
      <div className="inputContainer">
        <div className="input">
          <input
            type="number"
            placeholder="ID"
            value={id}
            onChange={(event) => setIdx(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <button type="submit"  onClick={addUser}>Add</button>
        </div>
      </div>
    </BaseApp>
  );
}
