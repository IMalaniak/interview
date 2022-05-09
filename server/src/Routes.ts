import axios from "axios";
import { Express } from "express";

interface Res {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
  };
}

interface Column {
  key: any;
  label: string;
}

type Cell = {
  data: any;
  type: "string" | "number" | "date" | "boolean" | "link"; // for UI formatting purposes
};

type Row = {
};

interface TableConfig {
  columns: Column[];
  rows: Row[];
}

interface User {
  id: number;
  name: string;
  email: string;
  street: string;
  age: number;
  createdAt: Date;
}

export class Routes {
  public registerRoutes(app: Express) {
    app.get("/hello", (req, res) => {
      res.json({ hello: "world" });
    });

    app.get("/users", async (req, res) => {
      const data = await axios.get<Res[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users: User[] = data.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        street: user.address.street,
        age: Math.floor(Math.random() * 30 + 1),
        createdAt: new Date(),
      }));


      const tableConfig: TableConfig<User> = {
        columns: [
          { key: "id", label: "ID" },
          { key: "Email", label: "Email" },
          { key: "Name", label: "Name" },
          { key: "street", label: "Street" },
          { key: "age", label: "Age" },
          { key: "createdAt", label: "Created At" },
        ],
        rows: [ //TODO
          {
            id: { data: 12, type: "number" },
            name: { data: 'Pablo', type: "string" },
            email: { data: 'pablo@mail.com', type: "string" },
            street: { data: 'SimpleStrasse', type: "string" },
            age: { data: 14, type: "number" },
            createdAt: { data: new Date(), type: "date" },
          }
        ],
      };
      res.status(200).json(tableConfig);
    });
  }
}
