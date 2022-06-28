import { Express } from "express";
import axios from 'axios';
import {User, UserJSONPlaceholder} from "./api.model";

export class Routes {
    protected userDataURL = "https://jsonplaceholder.typicode.com/users";

    public registerRoutes(app: Express) {
        app.get("/hello", (req, res) => {
            res.json({ hello: "world" });
        });
        app.get("/users", (req, res) => {
            this.getUsers(this.userDataURL)
                .then((users: User) => res.json(users))
                .catch(console.log);
        });
    }

    protected getUsers = async (url: string): Promise<User> =>
        await axios.get(url).then((response) =>
            response.data.map(
                (user: UserJSONPlaceholder): User => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    street: user.address.street,
                })
            )
        );
}