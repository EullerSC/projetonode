
const Vendas = require('../models/vendas');

 
module.exports = app => { 

    app.get('/vendas/listarVendas', (req,res) => { 
        Vendas.listarVendas(res);
    });


    app.get('/vendas/buscarPorId/:id', (req, res) => { 
        const id = parseInt(req.params.id);
        Vendas.buscaPorId(id, res);
    });

    app.post('/vendas/adicionarVenda', (req, res) => {
        const venda = req.body
        Vendas.adicionarVenda(venda, res)
     
    })

    app.patch('/vendas/corrigirVenda/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        Vendas.corrigirVenda(id, valores, res)
    })

    app.delete('/vendas/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Vendas.deletaVenda(id, res)
    })
}


