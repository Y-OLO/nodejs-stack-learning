import "reflect-metadata";
import {createConnection,getConnection, Connection, getManager,getRepository} from "typeorm";
import {User} from "./entity/User";
import { userInfo } from "os";

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));

// 使用接口调用方式
//  async function createConn(){
//     await createConnection({
//         "type": "mysql",
//         "host": "192.168.168.62",
//         "port": 3308,
//         "username": "root",
//         "password": "asa",
//         "database": "test_typeorm",
//         "synchronize": true,
//         "logging": false,
//         "entities": [
//            "src/entity/**/*.ts"
//         ],
//         "migrations": [
//            "src/migration/**/*.ts"
//         ],
//         "subscribers": [
//            "src/subscriber/**/*.ts"
//         ],
//         "cli": {
//            "entitiesDir": "src/entity",
//            "migrationsDir": "src/migration",
//            "subscribersDir": "src/subscriber"
//         }
//      }) .then(connection => {
//         console.info('创建成功',connection)
//       })
//       .catch(error => console.log(error));;
// }

// createConn();
// createConnection将从ormconfig.json / ormconfig.js / ormconfig.yml / ormconfig.env / ormconfig.xml 文件或特殊环境变量中加载连接选项
createConnection().then(async connection => {
    let userList = await getConnection().manager.find(User,{id:1})
    console.info(userList)
    const user = new User()
    user.firstName = "123123";
    user.age = 1;
    let saveUser = await getConnection().manager.save(user)
    console.info(saveUser.id)
    const builderSelect = await getConnection().createQueryBuilder()
                                                .select("user")
                                                .from(User,"user")
                                                .where("user.id = :id", { id: 1 })
                                                .getOne();
  console.info("使用Connection",builderSelect)

const userQueryBuild = await getManager()
    .createQueryBuilder(User, "user")
    .where("user.id = :id", { id: 1 })
    .getOne();
    console.info("使用Manager",userQueryBuild)

const getRepositoryBuild = await getRepository(User)
    .createQueryBuilder("user")
    .where("user.id = :id", { id: 1 })
    .getOne();
    console.info("使用repository",getRepositoryBuild)
   
})
.catch(error => console.log(error));

