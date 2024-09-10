/* NOME DO BANCO DE DADOS: */
const database = 'BD3-VINICIUS-AULA';

/*NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = 'LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

// db[collection].find({"categoria":"Fantasia Heroica"}) //"campo":"dado"
db[collection].find(
                        {"descricao":/Robôs/i},
                        {"_id":0, "codigo":0 }
                    );