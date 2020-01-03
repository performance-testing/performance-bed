import { IConfigOptions } from "../types"

let config: IConfigOptions = {
  version: '1.7.0',
  serve: {
    port: 8080,
    path: '',
  },
  keys: ['some secret hurr'],
  session: {
    key: 'performance:sess',
  },
  db: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'ts_test',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false
  },
  redis: {},
  mail: {},
    mailSender: ''
}

export default config
