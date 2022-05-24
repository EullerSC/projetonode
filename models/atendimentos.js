const moment = require('moment')
const conexao = require('../infraestrutura/conexao')
 
 
class Atendimento {
    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
 
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.length >=5
 
        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]
 
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length
 
        if(existemErros) {
            res.status(400).json(erros)
        } else {        
            const atendimentoDatado = {...atendimento, dataCriacao,data}
 
            const sql = 'INSERT INTO Atendimentos SET ?'
        }

    }
/*
    adicionaComprador(comprador, res) {
            const sql = 'INSERT INTO comprador SET ?'
    }
*/
    adicionaComprador(comprador, res) {
        const dataCriacao = new Date()
        const compradorDatado = {...comprador, dataCriacao}
        const sql = 'INSERT INTO comprador SET ?'
 
        conexao.query(sql, compradorDatado, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
               console.log(resultados)
            }
        })
    }

    
    buscaComprador(id, res) 
    {
        const sql = `SELECT * FROM comprador WHERE id=${id}`;
     
        conexao.query(sql, (erro, resultados) => 
        { 
            const comprador = resultados;
            if(erro) { 
                res.status(400).json(erro);
            } else {
                res.status(200).json(comprador);
            }
     
        }) 
    
    }

            
    buscaPorId(id, res) 
    {
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;
     
        conexao.query(sql, (erro, resultados) => 
        { 
            const atendimento = resultados[0];
            if(erro) { 
                res.status(400).json(erro);
            } else {
                res.status(200).json(atendimento);
            }
     
        }) 
    
    }



    altera(id, valores, res) 
    {
        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'
     
        conexao.query(sql, [valores, id], (erro, resultados) => 
        { 
            if(erro) 
            {
                res.status(400).json(erro)
            } else 
            {
                res.status(200).json(resultados)
        
            }
    
        })
    }

}
 
module.exports = new Atendimento
