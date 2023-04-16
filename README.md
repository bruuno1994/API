Para que a aplicação funcione, será necessário criar um arquivo .env, na pasta principal do projeto.

Após a criação do arquivo, dentro dele será necessário inserir a linha de código, responsável por fazer a ligação com o Banco de Dados.

Abaixo segue um exemplo da linha de código a ser inserida:

DATABASE_URL="mysql://root:* senha de conexão com o banco de dados * @ *localhost:número do localhost* / *nome do banco de dados* "

Exemplo da linha de código do meu banco de dados:

DATABASE_URL="mysql://root:minhasenhaaqui@localhost:3306/tarefas"