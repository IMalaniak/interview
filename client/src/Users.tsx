import {FC, useEffect, useState} from "react";
import {User} from "../../server/src/api.model"

export const Users: FC = () => {
    const [users, setUsers]= useState<User[]>([])
    const [currentUsers, setCurrentUsers] = useState([]);
  // @ts-ignore
    useEffect(async() => {
     const response = await fetch('http://localhost:3001/users')
     const users = await response.json ()
     setUsers(users);
    }, []);

    return <table>
      <tr>
      <th >id</th>
      <th>name</th>
      <th>email</th>
      <th>street</th>
    </tr>

  </table>
}

