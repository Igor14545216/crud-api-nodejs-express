const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res);
    });

    app.get('/atendimentos/:id', (req, res) => {
        Atendimento.buscaPorId(Number(req.params.id), res);
    });

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento, res);
    });

    app.patch('/atendimentos/:id', (req, res) => {
        // const id = Number(req.params.id) // quando eu quiser pegar apenas um dos valores do body
        const valores = req.body
        Atendimento.altera(Number(req.params.id), valores, res);
    })

    app.delete('/atendimentos/:id', (req, res) => {
        Atendimento.deleta(Number(req.params.id), res);
    })
}

