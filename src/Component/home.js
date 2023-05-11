import React from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../baseApp";
import { AppState } from "../Context/AppProvider";


export default function Home() {
    const {users,setUsers} = AppState()
    const history = useHistory()
    const deleteUser = (id)=>{
        const alterUser = users.filter((per)=>{
           return per.id !== id
        })
        setUsers(alterUser)
}
  return (
    <div>
      <BaseApp>
        <div>
            <button type="button"  className="addBtn btn btn-dark" onClick={()=>history.push("/add-user")}>Add User</button>
          <table className="table  table-striped ">
            <thead>
              <tr className="table-dark">
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
                {users.map((per,index)=>{
                    return(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{per.name}</td>
                            <td>{per.email}</td>
                            <td>
                                <button type="button"  className="addBtn btn btn-warning" onClick={()=>history.push(`/edit-user/${per.id}`)}>Update</button>
                                <button type="button"  className="addBtn btn btn-danger" onClick={()=>deleteUser(per.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
              
            </tbody>
          </table>
          
        </div>
      </BaseApp>
    </div>
  );
}
