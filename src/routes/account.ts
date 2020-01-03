import router from './router';
import { users } from '../models';
console.log(typeof users)
router.prefix('/users');
router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})
router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response';
  console.log('/bar')

})
router.get('/login', function (ctx, next) {
  console.log(ctx.query);  //{ aid: '123' }       获取的是对象   用的最多的方式  **推荐
  console.log(ctx.querystring);  //aid=123&name=zhangsan      获取的是一个字符串
  console.log(ctx.url);
  let query = ctx.query;
  let querystring = ctx.querystring;
  let url = ctx.url;
  // ctx.body = `query: ${query},querystring: ${querystring},url: ${url}`
})
