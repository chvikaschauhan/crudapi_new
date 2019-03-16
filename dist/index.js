"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const photo_1 = require("./src/entity/photo");
typeorm_1.createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345",
    database: "test",
    entities: [
        photo_1.Photo
    ],
    synchronize: true,
    logging: false
}).then(Connection => {
    const conn = this.Connection();
}).catch(error => console.log(error));
console.log("inside index");
//# sourceMappingURL=index.js.map