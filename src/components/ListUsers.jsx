// Import Dependencies
import { useEffect, useState } from "react";

// Import APIs
import listUsers from "../datasource/api-users";

export default function ListUsers() {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        try {
            listUsers().then((userList) => {
                if(!userList) throw error;
                setUserList(userList);
            }).catch(error => { console.log(error); });
        }
        catch (error) { console.log(error); }
    },[]);

    return(
        <div className="container">
            {userList.map((user, index) => {
                return(
                    <div key={index} className="bg-light m-3 p-3 border rounded shadow" data-bs-theme="light">
                        <h3 className="border-bottom p-2">{user.name}</h3>
                        Email: {user.email}
                    </div>
                );
            })}
        </div>
    );
}