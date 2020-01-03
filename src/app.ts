import Koa from 'koa'
const app = new Koa()
import json from 'koa-json'
import onerror from 'koa-onerror'
import bodyparser from 'koa-bodyparser'
import session from 'koa-generic-session'
import redisStore from 'koa-redis';
import logger from 'koa-logger'
import koaStatic from 'koa-static'
import router from "./routes";
import Config from './config';

// catch error
onerror(app);

// note session
app.keys = Config.keys;
app.use(session({
    store: redisStore(Config.redis)
}));
//
app.use(async (ctx, next) => {
    console.log(ctx.session)
    ctx.body = 'Hello World';
    await next();
});
//
app
  .use(router.routes())
  .use(router.allowedMethods());


app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(koaStatic(__dirname + '../public'))

// logger
app.use(async (ctx, next) => {
    const start: any = new Date()
    await next()
    const end: any = new Date();
    const ms = end - start;
    // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.request.method == "OPTIONS") {
        ctx.response.status = 200
    }
    await next();
});
// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});
//


app.use(async (ctx, next) => {
    // console.log('查找')
    // const results = await Animal.findAll({
    //     raw: true,
    // })

})
export default app;
