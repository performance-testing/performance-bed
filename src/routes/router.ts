import Router from 'koa-router';
import config from '../config'

let router = new Router({prefix: config.serve.path});
export default router;
