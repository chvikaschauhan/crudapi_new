"use strict";
exports.__esModule = true;
console.log("starting index");
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var photo_1 = require("./src/entity/photo");
console.log("hello1");
typeorm_1.createConnection({
    name: "conn",
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
}).then(function (connection) {
    console.log("connection created");
})["catch"](function (error) { return console.log(error); });
var con = typeorm_1.getConnection("conn");
exports["default"] = con;
