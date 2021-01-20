module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('você está na rota de atendimento testando GET'));

    app.post('/atendimentos', (req, res) => {
        //teste enviado do postman
        console.log(req.body)
        res.send('você está na rota de atendimento testando POST')
    });
}

