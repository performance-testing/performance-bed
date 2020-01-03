export interface IConfigOptions {
    version: string
    serve: {
        port: number
        path: string // Context Path
    },
    keys: string[]
    session: {
        key: string
    },
    db: object,
    redis: object,
    mail: object,
    mailSender: string
}
