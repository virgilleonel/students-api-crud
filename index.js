const express= require('express');
const app = express();
const port =process.env.PORT || 3000;

app.use(express.json());

var students= [
    {id : 1, name : "student 1" },
    {id : 2, name : "student 2" },
    {id : 3, name : "student 3" },
]
//rechecher a partir de l'identifiant de l'etudiant dans le tableau

app.get('/api/student/:id',(req,res)=>{
    let student =students.find(s => s.id === parseInt(req.params.id) );
    if(!student)
    return res.status(404).send('student with id not found');
    res.send(student);
});



//renvoir tous les etudiants du tableau
app.get('/api/student',(req,res)=>{
    res.send(students);
})

app.post('/api/student',(req,res)=>{
    if(!req.body.name || req.body.name.length<3)
      return res.status(400).send('Name is required with 3 characters at least')
    let student = {
        id: students.length +1,
        name : req.body.name
    };
     students.push(student);
     res.send(students)
})

app.listen(port,()=> console.log(`server running on ${port}...`));