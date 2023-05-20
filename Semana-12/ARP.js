// Curso de Engenharia de Software - UniEVANGÉLICA 
// Disciplina de Programação Web 
// Dev: Bruno Paiva Souza
// DATA: 15/05/2023


// npm install express
// npm install body-parser

// API de Cadastro de Paciente:

const express = require('express');
const bodyParser = require('body-parser');

const appPaciente = express();
appPaciente.use(bodyParser.json());

// Endpoint para cadastrar um novo paciente
appPaciente.post('/pacientes', (req, res) => {
    const paciente = req.body;
    // Lógica para cadastrar o paciente no banco de dados ou realizar outras operações necessárias
    // ...

    res.status(201).json({ message: 'Paciente cadastrado com sucesso' });
});

// Inicie o servidor da API de Cadastro de Paciente na porta desejada
appPaciente.listen(3000, () => {
    console.log('Servidor da API de Cadastro de Paciente iniciado na porta 3000');
});

// API de Cadastro e Listagem de Agenda:

const appAgenda = express();
appAgenda.use(bodyParser.json());

// Endpoint para cadastrar um novo evento na agenda
appAgenda.post('/agenda', (req, res) => {
    const evento = req.body;
    // Lógica para cadastrar o evento na agenda ou realizar outras operações necessárias
    // ...

    res.status(201).json({ message: 'Evento cadastrado com sucesso' });
});

// Endpoint para listar todos os eventos da agenda
appAgenda.get('/agenda', (req, res) => {
    // Lógica para buscar os eventos da agenda no banco de dados ou em outra fonte de dados
    // ...

    const eventos = [/* Array de eventos retornados */];
    res.status(200).json(eventos);
});

// Inicie o servidor da API de Cadastro e Listagem de Agenda na porta desejada
appAgenda.listen(3001, () => {
    console.log('Servidor da API de Cadastro e Listagem de Agenda iniciado na porta 3001');
});
