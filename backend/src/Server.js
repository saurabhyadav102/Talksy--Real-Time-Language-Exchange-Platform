import express from "express"
import "dotenv/config";
import authroutes from "./routes/auth.routes.js"
 import userRoutes from "./routes/user.route.js"
import chatRoutes from "./routes/chat.routes.js"
import { connectdb } from "./lib/db.js"
import cookieparser from "cookie-parser"
const port=process.env.PORT
import cors from "cors";
import path from "path";


const app =express()

const __dirname=path.resolve();
//console.log(__dirname)
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true, //allow frontend to send cookies
}))

app.use(express.json());
app.use(cookieparser())

app.use("/api/auth",authroutes)
 app.use('/api/users',userRoutes)
 app.use('/api/chat',chatRoutes)

if(process.env.NODE_ENV==="production"){
  console.log("hello production 1")
   app.use(express.static(path.join(__dirname,"/Frontend/dist")));
   // console.log("hello production 1")
   // console.log("Serving index.html from:", path.join(__dirname, "/Frontend/dist/index.html"));

   app.get(/.*/,(req,res)=>{
    res.sendFile(path.join(__dirname,"/Frontend","dist","index.html"));
   })
    console.log("hello production 1")
}
 app.listen(port,()=>{
      console.log(`port is listening on :${port}`);
    

      connectdb();
    })

