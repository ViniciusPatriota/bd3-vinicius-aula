/* NOME DO BANCO DE DADOS: */
const database = 'BD3-VINICIUS-AULA';

/*NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = 'LIVRARIA';

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* CRIAR UMA COLEÇÃO:  */
db.createCollection(collection);

db[collection].insertOne(
    {
        

    }
)