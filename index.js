


const express = require ("express");
const app = express ();
const port = 3000 ;

const users = [
  {
    id: 1,
    name: "Jahid Rayhan",
    email: "jahid@example.com",
    age: 25,
    role: "Admin"
  },
  {
    id: 2,
    name: "Sarah Khan",
    email: "sarah@example.com",
    age: 28,
    role: "Editor"
  },
  {
    id: 3,
    name: "Rafiq Ahmed",
    email: "rafiq@example.com",
    age: 30,
    role: "Subscriber"
  },
  {
    id: 4,
    name: "Ayesha Rahman",
    email: "ayesha@example.com",
    age: 22,
    role: "Contributor"
  },
  {
    id: 5,
    name: "Tanvir Hossain",
    email: "tanvir@example.com",
    age: 27,
    role: "Moderator"
  }
];





app.get ('./', (req,res)=>{
    res.send ('user management is running')
})
app.get ('/users', (req,res)=>{
    res.send (users)
})
app.listen (port,()=>{
   console.log(`server is running on Port : ${port}`) 
})