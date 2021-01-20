const { response } = require('express')
const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {

    // o que chegar de parametro do postman vou insrir dentro da tabela Atendimentos do meu banco
    adiciona(atendimento, res) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS') //data que eu mando do postman

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.length >= 3;

        const validacoes =
            [
                {
                    nome: 'data',
                    valido: dataEhValida,
                    mensagem: 'Data deve ser maior ou igual que a data atual',
                },
                {
                    nome: 'cliente',
                    valido: clienteEhValido,
                    mensagem: 'Cliente deve ter pelo menos 3 caracteres',
                }
            ]


        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else {
            const atendimentoDatado = { ...atendimento, dataCriacao, data }

            const sql = 'INSERT INTO Atendimentos SET ?'

            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if (erro)
                    res.status(400).json(erro);
                else
                    res.status(201).json(resultados);
            })
        }
    }

    //retorna dados da tabela
    lista(res) {
        const sql = 'SELECT * FROM Atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if (erro)
                res.status(400).json(erro);
            else
                res.status(200).json(resultados);
        })

    }

    //retorna um único registro com condição
    buscaPorId(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            if (erro)
                res.status(400).json(erro);
            else
                res.status(200).json(resultados[0]);
        })
    }

    //altera buscando por id na rota
    altera(id, valores, res) {
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?';

        if (valores.data)
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro)
                res.status(400).json(erro);
            else
                res.status(200).json(resultados);
        })
    }
}

module.exports = new Atendimento