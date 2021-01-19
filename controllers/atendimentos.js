module.exports = app  => {
    app.get('/atendimentos', (req, res) => res.send('você está na rota de atendimento e testando nodemonrs'))
}

