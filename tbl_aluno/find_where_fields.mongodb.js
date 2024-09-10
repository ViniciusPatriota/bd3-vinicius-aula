const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';


/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

// db[collection].find({"categoria":"Fantasia Heroica"}) //"campo":"dado"
db[collection].find(
                        {"cpf": "123.456.789-01"},
                        {"codigo_aluno":0}
                    );