
const Atendimento = require('../models/atendimentos');

 
module.exports = app => { 
    app.get('/atendimentos/:id', (req, res) => { 
        const id = parseInt(req.params.id);
        Atendimento.buscaPorId(id, res);
    });

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
     
        Atendimento.altera(id, valores, res)
    })
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)
     
    })

    // -------------- COMPRADOR --------------

    app.get('/comprador/:id', (req, res) => { 
        const id = parseInt(req.params.id);
        Atendimento.buscaComprador(id, res);
    });

    app.post('/comprador/adicionarComprador', (req, res) => {
        const comprador = req.body
        console.log(comprador)
        Atendimento.adicionaComprador(comprador, res)
     
    })
     
    


}


