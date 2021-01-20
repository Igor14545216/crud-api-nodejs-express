const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('você está na rota de atendimento testando GET'));

    app.post('/atendimentos', (req, res) => {
        const atendimento  = req.body;

        Atendimento.adiciona(atendimento);

        res.send('você está na rota de atendimento testando POST')
    });
}

