import { Table, Model, Column, PrimaryKey, DataType, CreatedAt, UpdatedAt } from "sequelize-typescript";
import { UserAttributes, UserCreationAttributes } from "./types/userTypes";

@Table({
  timestamps: true,
  tableName: 'users',
  modelName: 'User'
})

class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column({
    type: DataType.STRING
  })
  user_name: string ;

  @Column({
    type: DataType.STRING
  })
  password: string ;

}

export default User ;