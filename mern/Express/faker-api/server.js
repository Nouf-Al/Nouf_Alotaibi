//import express library
const express = require("express");
const Company = require("./Company")
const User = require("./User")


const port = 8000;


//make an instance of express webapp
const app = express();

//configures the app to accept from data
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//  localhost:8000/
app.get("/",(reg,res)=>{
    console.log(reg.url)
    res.send("<h1>Hello World</h1>")
});

//  example hardcoded data 
// const user = [
//     {_id: "1" , firstname:"Nouf" , lastname:"Alotaibi" ,phone:"123456789", email:"nouf@g.com" , password:"123456"},
// ];

// const company = [
//     {_id: "1" , name:"Nouf" , address:{
//         street:"aw" , city:"Riyadh", state:"Riyadh", zipCode:"12345", country:"KSA"
//     }},
// ];



//  localhost:8000/api/users/new    GET
app.get("/api/users/new",(reg,res)=>{
    console.log(reg.url)
    res.json( {user: new User} );
});


//  localhost:8000/api/companies/new    GET
app.get("/api/companies/new",(reg,res)=>{
    console.log(reg.url)
    res.json({ company: new Company });
});

//  localhost:8000/api/user/company    GET
app.get("/api/user/company",(reg,res)=>{
    console.log(reg.url)
    res.json({
        company: new Company ,
        user: new User
    });

});

//  localhost:8000/users   POST
// app.post("/api/user",(reg,res)=>{
//     console.log(reg.url, reg.body)
//     users.push(req.body);
//     res.json({message:"ok"});
// });



app.listen(port, ()=>console.log('Listening on port:'+port));

