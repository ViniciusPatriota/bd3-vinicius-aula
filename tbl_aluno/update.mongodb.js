const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv1';

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/*ALTERA OS DADOS DE UM DOCUMENTO NDA COLLECTION*/
db[collection].upadteOne(
                        {"codigo_aluno":"1"},
                        {
                            $set:{
                                "nome":"Juliana Souza",
                                "cpf":"12345678910",
                                "rg":"7745907690"
                            }
                        }


);