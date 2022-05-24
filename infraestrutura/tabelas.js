class Tabelas {
    init(conexao) {
        this.conexao = conexao
 
        this.criarTabelas()
    }
 
    criarTabelas() {
        const sql = `CREATE TABLE if not exists Comprador (id int NOT NULL
            AUTO_INCREMENT, nome varchar(50) NOT NULL, cpf varchar(20),
            idade int(20) NOT NULL,data datetime NOT NULL, dataCriacao datetime NOT NULL, PRIMARY KEY(id))`
     
 
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela criada com sucesso')
            }
        })
    }
}
 
module.exports = new Tabelas