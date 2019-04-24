module.db = () => {
    let mysql = require('mysql');

    let connConfig = {
        host: 'lconf.inf.ufes.br',
        port: 3306,
        user: 'devwebII',
        password: 'Faesa123!',
        database: 'alex_louzada'
        //bdPath: http://lconf.inf.ufes.br/phpMyAdmin
    }

    let connection = mysql.createConnection(connConfig);

    function connectDB() {
        connection.connect(err => {
            if (err) {
                console.log('Ocorreu um erro de conexão: ' + err);
            }
            else {
                console.log('Conexão estabelecida com sucesso ao banco ' + connConfig.database);
            }
        })
    }

    function disconnectDB() {
        connection.end(err => {
            if (err) {
                console.log('Ocorreu um erro ao desconectar: ' + err);
            }
            else {
                console.log('Conexão encerrada com sucesso.');
            }
        })
    }

    //---------------------------------------------------------------------------------
    function createTablesDB() {
        connectDB();
        let sql = [
            `CREATE TABLE IF NOT EXISTS 
            usuarios (
                cod_usuario INT NOT NULL AUTO_INCREMENT, 
                nome VARCHAR(100) NOT NULL, 
                tipo_usuario TINYINT NOT NULL, 
                email VARCHAR(100) NOT NULL, 
                password VARCHAR(256) NOT NULL,
                PRIMARY KEY (cod_usuario) 
            );
            `, 
            `CREATE TABLE IF NOT EXISTS 
            ativos (
                cod_ativo INT NOT NULL AUTO_INCREMENT,
                __cod_usuario INT NOT NULL,
                descricao VARCHAR(100),
                empresa VARCHAR(100), 
                PRIMARY KEY (cod_ativo),
                FOREIGN KEY (__cod_usuario) 
                REFERENCES usuarios(cod_usuario)
            );
            `, 
            `CREATE TABLE IF NOT EXISTS 
            transacoes (
                cod_transacao INT NOT NULL AUTO_INCREMENT, 
                ativo VARCHAR(5) NOT NULL,
                __cod_usuario INT NOT NULL, 
                quantidade INT NOT NULL,
                preco DECIMAL NOT NULL,
                data_transacao DATETIME NOT NULL, 
                PRIMARY KEY (cod_transacao),
                FOREIGN KEY (__cod_usuario) 
                REFERENCES usuarios(cod_usuario)
            );`
        ];
        let tables = ["USUARIOS", "ATIVOS", "TRANSACOES"];
        sql.forEach((query, index)=>{
            loadQuery(tables[index], query);
        });
        disconnectDB();
    }

    function loadQuery(nomeTabela, sql) {
        connectDB();
        connection.query(sql, (err, result, fields) => {
            if (err) {
                console.log("Erro na query da tabela " + nomeTabela + ": \n\n" + err + "\n\n Sql utilizado: \n\n" + sql);
            } else {
                console.log("Query rodada com sucesso!");
            }

            if (result) console.log(result);

            if (fields) console.log(fields);
        });
        disconnectDB();
    }

    let usuario = {
        nome: "Alex Abreu Louzada",
        tipoUsuario: "1",
        email: "alexlouzada2009@gmail.com",
        password: "alex11021998",
    }
    InserirUsuarioBD(usuario);
}