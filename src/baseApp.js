import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({children}){
    const history = useHistory()
    return(
        <div>
            <div className="header">
                <h3>Users Mangement App</h3>
                <button type="button"  className="addBtn btn btn-dark" onClick={()=>history.push("/")}>Home</button>
            </div>
            <div className="content">
                {children}
            </div>
            <div className="footer">
                <h5>capywrite @ 2023</h5>
            </div>
        </div>
    )
}