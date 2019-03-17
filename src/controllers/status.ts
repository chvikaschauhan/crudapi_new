import { Request, Response } from 'express';
import {Photo} from "../entity/photo" ;
import con from "../../index";

import insert from "../insert";
import "reflect-metadata";
import {createConnection, Connection ,getConnection,getRepository} from "typeorm";

import * as express from "express";

import * as bodyParser from  "body-parser";




export let hi = (req: Request, res: Response) => {
  
    var name=req.query.name;
    var des =req.query.des;
    var f_name=req.query.f;
    var view =req.query.view;
    var status=req.query.status;


   
       
       
      let getrepo = con.getRepository(Photo);
        getrepo.save(insert.photo(name,des,f_name,view,status));
        console.log("photo has been saved");
       
         
        console.log("connection created");
     
    
     
   
      res.send("foto saaved");
    
}






export let find=async (req: Request, res: Response) => {
   var key =req.query.key;

   

   
   
  let getrepo = con.getRepository(Photo);
 
  let firstPhoto =await getrepo.findOne(key);
  res.send("foto found"+ firstPhoto);
   
     
    console.log("connection created");
 

 
  

}

export let remove =async (req: Request, res: Response) => {
    
    var key =req.query.key;

   
 
     
    
   let getrepo = con.getRepository(Photo);
  
   let  photoToRemove = await getrepo.findOne(key);
     await  getrepo.remove(photoToRemove);
    
      
     console.log("connection created");
     res.send("foto removed"+photoToRemove);
  
 
   
   
 
}

