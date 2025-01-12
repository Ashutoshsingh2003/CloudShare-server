import { Optional } from "sequelize";

export interface UserAttributes {
    name : string,
    email: string,
    id: number,
    password: string,
    createdAt: Date,
    updatedAt: Date
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {} ;