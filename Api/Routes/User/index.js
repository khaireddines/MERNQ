import express from "express";
export const User=express.Router()

User.get('/',(req, res,next)=>{
    res.send('all users list')
})

User.get('/all',(req, res,next)=>{
    res.status(200).json(req.get('x-auth-key'))
})
