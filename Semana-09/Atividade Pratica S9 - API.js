const express = require('express');
const app = express();
app.use(express.json());

// Dados fictícios de desenhos animados
let cartoons = [
    { id: 1, name: 'Desenho A', characters: ['Personagem 1', 'Personagem 2'], plot: 'Lorem ipsum dolor sit amet' },
    { id: 2, name: 'Desenho B', characters: ['Personagem 3', 'Personagem 4'], plot: 'Consectetur adipiscing elit' }
];

// Recuperar a lista de desenhos animados associados a uma cidade específica por ID
app.get('/api/cities/:city_id/cartoons', (req, res) => {
    const cityId = req.params.city_id;
    // Aqui você pode adicionar a lógica para buscar os desenhos animados associados à cidade com o ID fornecido
    // Neste exemplo, estamos retornando todos os desenhos animados existentes
    res.json(cartoons);
});

// Adicionar um novo desenho animado a uma cidade específica por ID
app.post('/api/cities/:city_id/cartoons', (req, res) => {
    const cityId = req.params.city_id;
    // Aqui você pode adicionar a lógica para adicionar um novo desenho animado à cidade com o ID fornecido
    // Os dados do desenho animado podem ser acessados em req.body
    const newCartoon = req.body;
    cartoons.push(newCartoon);
    res.status(201).json(newCartoon);
});

// Recuperar informações de um desenho animado específico por ID
app.get('/api/cities/:city_id/cartoons/:cartoon_id', (req, res) => {
    const cartoonId = req.params.cartoon_id;
    // Aqui você pode adicionar a lógica para buscar as informações do desenho animado com o ID fornecido
    const cartoon = cartoons.find(c => c.id === parseInt(cartoonId));
    if (cartoon) {
        res.json(cartoon);
    } else {
        res.status(404).json({ message: 'Desenho animado não encontrado' });
    }
});

// Atualizar informações de um desenho animado específico por ID
app.put('/api/cities/:city_id/cartoons/:cartoon_id', (req, res) => {
    const cartoonId = req.params.cartoon_id;
    // Aqui você pode adicionar a lógica para atualizar as informações do desenho animado com o ID fornecido
    const cartoon = cartoons.find(c => c.id === parseInt(cartoonId));
    if (cartoon) {
        cartoon.name = req.body.name || cartoon.name;
        cartoon.characters = req.body.characters || cartoon.characters;
        cartoon.plot = req.body.plot || cartoon.plot;
        res.json(cartoon);
    } else {
        res.status(404).json({ message: 'Desenho animado não encontrado' });
    }
});

// Excluir um desenho animado específico por ID
app.delete('/api/cities/:city_id/cartoons/:cartoon_id', (req, res) => {
    const cartoonId = req.params.cartoon_id;
    // Aqui você pode adicionar a lógica para excluir o desenho animado com o ID fornecido
    const cartoonIndex = cartoons.findIndex(c => c.id === parseInt(cartoonId));
    if (cartoonIndex !== -1) {
        const deletedCartoon = cartoons.splice(cartoonIndex, 1);
        res.json(deletedCartoon[0]);
    } else {
        res.status(404).json({ message: 'Desenho animado não encontrado' });
    }
});

// Inicie o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
