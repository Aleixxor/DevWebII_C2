var db = require('../infra/db');

exports.addUser = (user) => {
    let table = "USUARIOS";
    
    let sql = `
        INSERT INTO usuarios (
            nome, 
            tipo_usuario, 
            email, 
            password
        ) 
        VALUES (
            '`+ user.nome + `',
            '`+ user.tipoUsuario + `',
            '`+ user.email + `',
            '`+ user.password + `'
        );`;
    db.loadQuery(table, sql);
}

exports.searchUsers = (userParams) => {
    let table = "USUARIOS";
    
    let sql = `
        INSERT INTO usuarios (
            nome, 
            tipo_usuario, 
            email, 
            password
        ) 
        VALUES (
            '`+ user.nome + `',
            '`+ user.tipoUsuario + `',
            '`+ user.email + `',
            '`+ user.password + `'
        );`;
    db.loadQuery(table, sql);
}