const database = 'BD3-NoSQL-AtlasMongoDB';
//nome do banco de dados
const collection = 'bd3-nosql-atv1';
//cria ou acessar o banco de dados
use(database);
 
db[collection].insertMany([
    {
      "codigo_aluno": "1",
      "codigo_turma": "1",
      "nome": "Ana Souza",
      "cpf": "123.456.789-01",
      "rg": "12.345.678-1",
      "telefone_aluno": "(11) 91234-5678",
      "telefone_responsavel": "(11) 92345-6789",
      "email": "ana.souza@example.com",
      "data_nasc": "2005-01-10"
    },
    {
      "codigo_aluno": "2",
      "codigo_turma": "1",
      "nome": "Pedro Lima",
      "cpf": "234.567.890-12",
      "rg": "23.456.789-2",
      "telefone_aluno": "(21) 93456-7890",
      "telefone_responsavel": "(21) 94567-8901",
      "email": "pedro.lima@example.com",
      "data_nasc": "2006-02-15"
    },
    {
      "codigo_aluno": "3",
      "codigo_turma": "2",
      "nome": "Mariana Santos",
      "cpf": "345.678.901-23",
      "rg": "34.567.890-3",
      "telefone_aluno": "(31) 94567-8901",
      "telefone_responsavel": "(31) 95678-9012",
      "email": "mariana.santos@example.com",
      "data_nasc": "2005-03-20"
    },
    {
      "codigo_aluno": "4",
      "codigo_turma": "2",
      "nome": "Lucas Pereira",
      "cpf": "456.789.012-34",
      "rg": "45.678.901-4",
      "telefone_aluno": "(41) 95678-9012",
      "telefone_responsavel": "(41) 96789-0123",
      "email": "lucas.pereira@example.com",
      "data_nasc": "2006-04-25"
    },
    {
      "codigo_aluno": "5",
      "codigo_turma": "3",
      "nome": "Julia Costa",
      "cpf": "567.890.123-45",
      "rg": "56.789.012-5",
      "telefone_aluno": "(51) 96789-0123",
      "telefone_responsavel": "(51) 97890-1234",
      "email": "julia.costa@example.com",
      "data_nasc": "2007-05-30"
    },
    {
      "codigo_aluno": "6",
      "codigo_turma": "3",
      "nome": "Carlos Almeida",
      "cpf": "678.901.234-56",
      "rg": "67.890.123-6",
      "telefone_aluno": "(61) 97890-1234",
      "telefone_responsavel": "(61) 98901-2345",
      "email": "carlos.almeida@example.com",
      "data_nasc": "2005-06-10"
    },
    {
      "codigo_aluno": "7",
      "codigo_turma": "4",
      "nome": "Fernanda Martins",
      "cpf": "789.012.345-67",
      "rg": "78.901.234-7",
      "telefone_aluno": "(71) 98901-2345",
      "telefone_responsavel": "(71) 99012-3456",
      "email": "fernanda.martins@example.com",
      "data_nasc": "2006-07-15"
    },
    {
      "codigo_aluno": "8",
      "codigo_turma": "4",
      "nome": "Eduardo Oliveira",
      "cpf": "890.123.456-78",
      "rg": "89.012.345-8",
      "telefone_aluno": "(81) 99012-3456",
      "telefone_responsavel": "(81) 99123-4567",
      "email": "eduardo.oliveira@example.com",
      "data_nasc": "2007-08-20"
    },
    {
      "codigo_aluno": "9",
      "codigo_turma": "5",
      "nome": "Patrícia Rocha",
      "cpf": "901.234.567-89",
      "rg": "90.123.456-9",
      "telefone_aluno": "(91) 99123-4567",
      "telefone_responsavel": "(91) 99234-5678",
      "email": "patricia.rocha@example.com",
      "data_nasc": "2005-09-25"
    },
    {
      "codigo_aluno": "10",
      "codigo_turma": "5",
      "nome": "Ricardo Souza",
      "cpf": "012.345.678-90",
      "rg": "01.234.567-0",
      "telefone_aluno": "(11) 99234-5678",
      "telefone_responsavel": "(11) 99345-6789",
      "email": "ricardo.souza@example.com",
      "data_nasc": "2006-10-30"
    }
  
]);