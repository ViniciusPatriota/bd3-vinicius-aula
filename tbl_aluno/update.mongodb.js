const database = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'bd3-nosql-atv1';

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* ALTERAR OS DADOS DE UM DOCUMENTO NA COLEÇÃO */
db[collection].updateMany(
    { "codigo_aluno": "1" }, // Critério de filtro para selecionar documentos a serem atualizados
    {
        $set: {
            "nome": "Juliana Souza",
            "cpf": "123.456.789-10", // Adicione pontos e hífen conforme o padrão de CPF se desejado
            "rg": "77.459.076-90"   // Adicione pontos e hífen conforme o padrão de RG se desejado
        }
    }
);
