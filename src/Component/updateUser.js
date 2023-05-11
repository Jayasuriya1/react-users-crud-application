import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import BaseApp from "../baseApp";
import { AppState } from "../Context/AppProvider";

export default function EditUser() {
  const { users } = AppState();
  const history = useHistory();

  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();
  const selectedUser = users.find((per) => per.id === id);
  console.log(selectedUser);
  console.log(selectedUser[0]);
  console.log(selectedUser.name);

  useEffect(() => {
    setIdx(selectedUser.id);
    setName(selectedUser.name);
    setEmail(selectedUser.email);
  }, []);

  const updateUser = () => {
    const index = users.findIndex((per) => per.id === id);
    const editedData = {
      id: idx,
      name,
      email,
    };
    console.log(editedData);
    users[index] = editedData;
    history.push("/");
  };

  return (
    <div>
      <BaseApp>
        <div className="inputContainer">
          <div className="input">
            <input
              placeholder="ID"
              value={idx}
              required
              onChange={(event) => setIdx(event.target.value)}
            />
            <input
              placeholder="Name"
              value={name}
              required
              onChange={(event) => setName(event.target.value)}
            />
            <input
              placeholder="Email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
            />
            <button onClick={updateUser}>Update</button>
          </div>
        </div>
      </BaseApp>
    </div>
  );
}
