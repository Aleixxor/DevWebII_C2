let mysql = require('mysql');

let connConfig = {
    host: 'lconf.inf.ufes.br',
    port: 3306,
    username: 'devwebII',
    password: 'Faesa123!',
    database: 'alex_louzada'
    //bdPath: http://lconf.inf.ufes.br/phpMyAdmin
}

let connection = mysql.createConnection(connConfig);

connection.connect(err => {
    if(err){
        console.log('Ocorreu um erro de conexão: ' + err);
    }else{
        console.log('Conexão estabelecida com sucesso ao banco ' + connConfig.database);
    }
})