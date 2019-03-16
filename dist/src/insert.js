"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Photo_1 = require("./entity/Photo");
console.log("inside ins");
typeorm_1.createConnection( /*...*/).then(connection => {
    let photo = new Photo_1.Photo();
    photo.name = "Me and Bears";
    photo.description = "I am near polar bears";
    photo.filename = "photo-with-bears.jpg";
    photo.view = 1;
    photo.ispublish = true;
    return connection.manager
        .save(photo)
        .then(photo => {
        console.log("Photo has been saved. Photo id is", photo.id);
    });
}).catch(error => console.log(error));
console.log("out ins");
//# sourceMappingURL=insert.js.map