const moment = require('moment')
const conexao = require('../infraestrutura/conexao')
 
 
class Vendas {
  
    // GET

    listarVendas(res) {
        const sql = 'SELECT * FROM vendas'

        conexao.query(sql, (erro, resultados) => { 
            if(erro) {
                res.status(400).json(erro)
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


    adicionarVenda(vendas,res){
        const sql = 'INSERT INTO Vendas SET ?' 
        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
               console.log(resultados)
            }
        })
    }

    
    buscaVendas(id, res) 
    {
        const sql = `SELECT * FROM vendas WHERE id=${id}`;
     
        conexao.query(sql, (erro, resultados) => 
        { 
            const vendas = resultados;
            if(erro) { 
                res.status(400).json(erro);
            } else {
                res.status(200).json(vendas);
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
 
module.exports = new Vendas
