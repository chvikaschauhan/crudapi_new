//import {createConnection} from "typeorm";
import "reflect-metadata";
import {Photo} from "./entity/photo";

//import conn from "../index";



console.log("inside ins");

 const insert ={



   
    photo(name:string,des:string,f_name:string,view:number,status:boolean):Photo {
        let photo = new Photo();    
  
    photo.name = name;
    photo.description = des;
    photo.filename =f_name
    photo.view = view;
    photo.ispublish = status;
    return photo;
    }
     
 
 }
export default insert ;

