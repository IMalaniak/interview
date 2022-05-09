import axios from "axios";
import {FC, useEffect, useState} from "react";


export const Users: FC = () => {

  const [data, setData] = useState<any[]>();

  useEffect(() => {
    (async () => {
      const res = await axios.get<any[]>('http://localhost:3001/users');
      setData(res.data);
    })()

  }, []);


  return <table>


  </table>
}

