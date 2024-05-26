const express = require('express');
const patient=express.Router();
const reportdata=require('../models/Reportdata')
patient.post("/maindetails",async(req,res)=>{
    try{
      const today = new Date().toISOString().split('T')[0];
      const {name,eye}=req.body;
      const dashuser=new reportdata({
         name:name,
         eye:eye,
         date:today
      })
      await dashuser.save();
      res.send("success")
    }
    catch(e){
      console.log(e);
      res.send("error")
    }
})
patient.get("/maindetails",async(req,res)=>{
    try{
       const users=await reportdata.find();
       res.json(users)
    }
    catch(e){
      console.log(e);
      res.json("error")
    }
})
module.exports=patient;