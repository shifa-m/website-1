import path from "path"
import express from "express"
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'


import connectDB from "./db/db"

dotenv.config();

connectDB();

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());




export default app

