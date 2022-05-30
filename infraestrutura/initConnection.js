class initConnection {
    init(conexao) {
        this.conexao = conexao
        
        this.criarTabelas()
        this.criarRegistros()
    }
 
    criarTabelas() {
        const sql = ` CREATE TABLE if not exists Vendas (
            id int NOT NULL AUTO_INCREMENT, 
            vendedor varchar(100) NOT NULL,
            comprador varchar(100) NOT NULL,
            carro varchar(100) NOT NULL,
            anoCarro varchar(10) NOT NULL,
            marcaCarro varchar(50) NOT NULL,
            corCarro varchar(50) NOT NULL,
            PRIMARY KEY(id))`
 
            
        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela criada com sucesso')
            }
        })
    }

    criarRegistros(){

        const sqlInsert =  [`INSERT INTO vendas (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro) values (default, 'Marcos', 'Geovana', 'Celta','2009','Chevrolet','Cinza');`,
        `INSERT INTO vendas (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro) values (default, 'Maria', 'Juliana', 'Virtus','2019','Volkswagen','Prata');`,
        `INSERT INTO vendas (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro) values (default, 'Rogrigo', 'Rafael', 'Hilux','2022','Toyata','Branco');`,
        `INSERT INTO vendas (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro) values (default, 'Iury', 'José', 'Fiesta','2021','Ford','Vermelho');`,
        `INSERT INTO vendas (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro) values (default, 'Roberto', 'João', 'QQ','2017','Chery','Azul');`,
        `INSERT INTO vendas (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro) values (default, 'Elisson', 'Marlene', 'Pálio','2018','Fiat','Branco');`,
        `INSERT INTO vendas (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro) values (default, 'Marcelo', 'Patricia', 'Prisma','2022','Chevrolet','Prata');`,
        `INSERT INTO vendas (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro) values (default, 'Euller', 'Gabriela', 'Honda','2020','Civic','Preto');`,
        `INSERT INTO vendas (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro) values (default, 'Nicolai', 'Beatriz', 'Compass','2021','Jeep','Cinza');`,
        `INSERT INTO vendas (id,vendedor,comprador,carro,anoCarro,marcaCarro,corCarro) values (default, 'Julio', 'Thaislane', 'Onix','2019','Chevrolet','Prata');`]

        this.conexao.query('SELECT COUNT(*) AS count FROM vendas', (erro, result) => {

           const totalRegistros = result[0].count
               
           if(erro){
            console.log(erro)
           }else{
               if(totalRegistros > 0){
                console.log('Registros iniciais já inseridos. Total de registros: ' + totalRegistros);
               }else{
                    for(let i=0;i<sqlInsert.length;i++){
                        this.conexao.query(sqlInsert[i], erroInsert => {
                            if(erroInsert) {
                                console.log(erroInsert)
                            }else{
                                console.log('Insert inserido')
                            }
                        })               
                    }    
               }
           }
        })
    }
}
 
module.exports = new initConnection