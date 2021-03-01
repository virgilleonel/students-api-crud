const express= require('express');
const app = express();
const port =process.env.PORT || 3000;

var student= [
    {id : 1, name : "student 1" },
    {id : 1, name : "student 2" },
    {id : 1, name : "student 3" },
]

app.get('/api/student',(req,res)=>{
    res.send(student);
})

app.listen(port,()=> console.log(`server running on ${port}...`));