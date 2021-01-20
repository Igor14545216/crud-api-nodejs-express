const conexao = require('../infraestrutura/conexao')

class Atendimento {
    // o que chegar de parametro vou insrir dentro da tabela Atendimentos do meu banco
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimento, (erro, resultados) => {
            if (erro)
                console.log(erro);
            else
                console.log(resultados)
        })
    }

}

module.exports = new Atendimento