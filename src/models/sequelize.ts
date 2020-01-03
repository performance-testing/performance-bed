import { Sequelize } from "sequelize-typescript";
import path from 'path';
import Config from "../config";

/**
 * connect to mysql
 */
const sequelize = new Sequelize('ts_test', 'root', 'root123', Config.db);
sequelize.addModels([path.resolve(__dirname, '/bo')])

// note 验证是否连接成功
sequelize.authenticate().then(() => {
  console.log('DATABASE √')
  addData();
}).catch(err => {
  console.error('Failed', err);
});

function addData() {
  // const name = 'Niko';
  // const weight = 70;
  // const animal = new Animal({ name, weight });
  // animal.save();
  // let username = 'sundd';
  // let password = '123456';
  // let email = 'sundd@dd.com';
  // const user = new User({username,password,email});
  // user.save();
  // console.log('添加数据');

}

export default sequelize
