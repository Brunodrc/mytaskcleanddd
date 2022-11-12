import { DataSource } from "typeorm";
import { Task } from "./src/domain/entities/Task";
import { User } from "./src/domain/entities/User";


export const AppDataSource = new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"12345",
    database:"todoclean",
    synchronize:false,
    logging:true,
    entities: [User, Task],
    migrations: ['src/**/migrations/*{.ts,.js}'],
    subscribers: [],
})