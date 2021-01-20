const { response } = require('express')
const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {

    // o que chegar de parametro do postman vou insrir dentro da tabela Atendimentos do meu banco
    adiciona(atendimento, res) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS') //data que eu mando do postman
        const atendimentoDatado = { ...atendimento, dataCriacao, data } //pego tudo que estiver vindo do meu post e acrescendo o dataCriacao
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if (erro)
                res.status(400).json(erro);
            else
                res.status(201).json(resultados);
        })
    }
}

module.exports = new Atendimento