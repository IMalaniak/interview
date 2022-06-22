import { Express } from "express";

export class Routes {
  public registerRoutes(app: Express) {
    app.get("/hello", (req, res) => {
      res.json({ hello: 'world' });
    });
    app.get("/users", (req, res) => {
      res.json([{
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "street": "street"
      },
        {
          "id": 2,
          "name": "Karolina",
          "email": "karolina.oleksiewicz1@gmail.com",
          "street": "Akacjowa"
        }])
    });
  }
}



