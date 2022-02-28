import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface UserInstance extends Model {
    id: number;
    username: string;
}

export const User = sequelize.define<UserInstance>("User",{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING,
        set(value: string) {
            let name:string = value.toLowerCase();
            this.setDataValue('username', name);
        },
        get() {
            return this.getDataValue('username').toUpperCase();
        }
    },
    firstLetterOfName: {
        type: DataTypes.VIRTUAL,
        get() {
            let letter:string = this.getDataValue('username')
            return letter.charAt(0);
        }
    }
},{
    tableName: 'users',
    timestamps: false
});