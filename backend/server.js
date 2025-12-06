const express = require("express");
const app = express();
const cors = require("cors");
const companyRoutes = require("./routes/company");
app.use(cors());
app.use(express.json());
app.use("/api/company", companyRoutes);


 
app.get("/", (req,res)=>{
    res.send("Backend running...");
});

app.listen(5000, ()=>{
    console.log("Server started on port 5000");
});

const users = [
{email:"test@gmail.com", password:"1234", role:"user"},
{email:"admin@gmail.com", password:"admin", role:"admin"}
];
 
app.post("/login",(req,res)=>{
const {email,password} = req.body;
 
const user = users.find(u=>u.email===email && u.password===password);
 
if(!user){
  return res.json({message:"Invalid credentials"});
}
 
res.json({message:"Login successful", role:user.role});
});

const authRoutes = require("./routes/auth");
 
app.use("/api/auth", authRoutes);
app.use("/api/admin", require("./routes/admin"));






const mongoose = require("mongoose");

const MONGO_URI = "mongodb+srv://parking:parking123@cluster0.thuzccq.mongodb.net/?appName=Cluster0";

mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("DB Error:", err));
