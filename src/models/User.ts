import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInstance extends Model {
    id: number;
    username: string;
}

export const User = sequelize.define<UserInstance>("User",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING
    }
},{
    tableName: 'users',
    timestamps: false
});