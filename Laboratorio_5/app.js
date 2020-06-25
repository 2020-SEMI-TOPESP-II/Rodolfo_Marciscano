const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const PORT = 3000;

const ESTUDIANTES = [
    {
        nombre: "Zianni 'Zeta' Pitti",
        edad: 22,
    },
    {
        nombre: "Seth 'C' Delgado",
        edad: 22,
    },
    {
        nombre: "Gloria 'Goggia' Riquelme",
        edad: 23,
    },
    { 
        nombre: "Ian 'Mini' Marciscano",
        edad: 22
    }

];

app.use(bodyParser.json());

app.get('/api/estudiantes/', (req, res) => {
    res.json({
        estudiantes:ESTUDIANTES,
        cantidad: ESTUDIANTES.length
    });
});

app.post('/api/estudiantes/', (req, res) => {
    console.log('Body: ', req.body);
    res.json({
        nombre: "ZiRo",
    });
});

app.get('/api/estudiantes/:id', (req, res) => {
    res.json(ESTUDIANTES[req.params.id]); 
    });

app.put('/api/estudiantes/:id',(req,res) => {
    const{nombre,edad}=req.body;
    ESTUDIANTES[req.params.id]={nombre,edad};
    return res.send(`It has been modified`);
});

app.delete('/api/estudiantes/:id',(req,res) => {
    ESTUDIANTES[req.params.id]={nombre:"",edad:""}
    return res.send(`Youe have deleted student ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Executing in port ${PORT}`);
});
