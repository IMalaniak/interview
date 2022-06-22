import {FC, useEffect, useState} from "react";

type User = {
    id: number,
    name: string,
    email: string,
    address: Address,
}

type Address = {
    street: string,
}

export const Users: FC = () => {
    const [users, setUsers]= useState<User[]>([])
    const [currentUsers, setCurrentUsers] = useState([]);
  // @ts-ignore
    useEffect(async() => {
     const response = await fetch('https://jsonplaceholder.typicode.com/users')
     const users = await response.json ()
     setUsers(users);
    }, []);
    
    const [sorting, setSorting] = useState({ field: 'name', ascending: false })
    const sort = ( key: string, ascending: boolean) => {
        setSorting ({ field: 'name', ascending: ascending});
    }

    useEffect(() => {
        const currentUsersCopy = [...users];
        currentUsersCopy.sort((a: string, b: string) => {
            return a[sorting.field].localeCompare(b[sorting.field]);
        });
    }, [users, sort]);

    return <table>
      <tr>
      <th >id</th>
      <th onClick={() => sort.name}>name</th>
      <th>email</th>
      <th>street</th>
    </tr>

    {users.map(user => {
      return  <tr>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.address.street}</td>
      </tr>
    })}

  </table>
}

