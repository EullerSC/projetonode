
const Vendas = require('../models/vendas');

 
module.exports = app => { 
    app.get('/vendas/buscarPorId/:id', (req, res) => { 
        const id = parseInt(req.params.id);
        Vendas.buscaPorId(id, res);
    });

    app.get('/vendas/listarVendas', (res) => { 
        Vendas.listarVendas(res);
    });

    app.patch('/vendas/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        Vendas.altera(id, valores, res)
    })
    
    app.post('/vendas/adicionarVenda', (req, res) => {
        const vendas = req.body
        Vendas.adicionarVenda(vendas, res)
     
    })

    // -------------- COMPRADOR --------------

    app.get('/comprador/:id', (req, res) => { 
        const id = parseInt(req.params.id);
        Atendimento.buscaComprador(id, res);
    });

    app.get('/comprador', (req, res) => { 
        Atendimento.lista(res);
    });

    app.post('/comprador/adicionarComprador', (req, res) => {
        const comprador = req.body
        console.log(comprador)
        Atendimento.adicionaComprador(comprador, res)
     
    })
}


