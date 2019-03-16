"use strict";
exports.__esModule = true;
//import {createConnection} from "typeorm";
require("reflect-metadata");
var photo_1 = require("./entity/photo");
//import conn from "../index";
console.log("inside ins");
var insert = {
    photo: function (name, des, f_name, view, status) {
        var photo = new photo_1.Photo();
        photo.name = name;
        photo.description = des;
        photo.filename = f_name;
        photo.view = view;
        photo.ispublish = status;
        return photo;
    }
};
exports["default"] = insert;
