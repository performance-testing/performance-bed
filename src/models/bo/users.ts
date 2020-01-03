import sequelize from '../sequelize';
console.log(typeof  sequelize)
import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, DataType, Unique } from 'sequelize-typescript';
@Table({
    tableName: 'users',
    timestamps: false
})
export default class User extends Model<User> {
    @AutoIncrement
    @PrimaryKey
    @Column
    id: number

    @AllowNull(false)
    @Column(DataType.STRING(32))
    username: string

    @Column(DataType.STRING(32))
    password: string

    @AllowNull(false)
    @Unique
    @Column(DataType.STRING(128))
    email: string

    static async getList<T extends User>() {
        const results = await this.findAll({
            raw: true,
        })
        return results as T[]
    }
}
