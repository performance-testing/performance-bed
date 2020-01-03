import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
@Table({
    tableName: 'animal',
    timestamps: false
})
export default class Animal extends Model<Animal> {
    // @Column({
    //     primaryKey: true,
    //     autoIncrement: true,
    // })
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number

    @Column
    name: string

    @Column
    weight: number

    static async getList<T extends Animal>() {
        const results = await this.findAll({
            raw: true,
        })
        return results as T[]
    }
}
