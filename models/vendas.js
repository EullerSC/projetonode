//const moment = require('moment')
const conexao = require('../infraestrutura/conexao')
 
 
class Vendas {
  
    // GET

    listarVendas(res) {
        const sql = 'SELECT * FROM Vendas'

        conexao.query(sql, (erro, resultados) => { 
            if(erro) {
                res.status(400).json(erro);
            } else { 
                res.status(200).json(resultados)
            }
        })
    }
    
    
    buscaPorId(id, res) 
    {
        const sql = `SELECT * FROM Vendas WHERE id=${id}`;
     
        conexao.query(sql, (erro, resultados) => 
        { 
            const vendas = resultados[0];
            if(erro) { 
                res.status(400).json(erro);
            } else {
                res.status(200).json(vendas);
            }
     
        }) 
    
    }

    // POST

    adicionarVenda(venda,res){
        const sql = 'INSERT INTO Vendas SET ?' 
        conexao.query(sql,venda, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }
        })
    }

    // PATCH

    corrigirVenda(id, valores, res) 
    {
        const sql = 'UPDATE Vendas SET ? WHERE id=?'
     
        conexao.query(sql, [valores, id], (erro, resultados) => 
        { 
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json(resultados)
            }
        })
    }

    // DELETE

    deletaVenda(id, res) {
        const sql = 'DELETE FROM Vendas WHERE id=?'
 
        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({resultados})
            }
        })
    }

}
 
module.exports = new Vendas
