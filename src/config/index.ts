import { IConfigOptions } from "../types"
// local or development or production
let configObj: IConfigOptions =
    (process.env.NODE_ENV === 'local' && require('./config.local')).default ||
    (process.env.NODE_ENV === 'dev' && require('./config.dev')).default ||
    require('./config.prod').default

export default configObj
