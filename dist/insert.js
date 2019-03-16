"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {createConnection} from "typeorm";
require("reflect-metadata");
const photo_1 = require("./entity/photo");
//import conn from "../index";
console.log("inside ins");
console.log("inside ins class");
let photo = new photo_1.Photo();
photo.name = "Me and Bears";
photo.description = "I am near polar bears";
photo.filename = "photo-with-bears.jpg";
photo.view = 1;
photo.ispublish = true;
console.log("out ins");
exports.default = photo;
//# sourceMappingURL=insert.js.map