var db = require('../infra/db');
let User = require('../classes/dbClasses').User;

exports.addUser = (user) => {
    let sql = `
        INSERT INTO usuarios (
            nome, 
            tipo_usuario, 
            email, 
            password
        ) 
        VALUES (
            '`+ user.nome + `',
            '`+ user.tipo_usuario + `',
            '`+ user.email + `',
            '`+ user.password + `'
        );`;
    db.loadQuery(sql);
}

exports.searchUsers = (userParams) => {
    let sql = `
        SELECT * 
        FROM usuarios`;
    
        if(userParams){
            sql = sql + " WHERE ";
            
            if(userParams.nome){
                sql = sql + `nome LIKE '%${userParams.nome}%'`;
            }
            if(userParams.nome){
                sql = sql + `AND tipo_usuario LIKE '%${userParams.tipo_usuario}%'`;
            }
            if(userParams.nome){
                sql = sql + `AND email LIKE '%${userParams.email}%'`;
            }
            if(userParams.nome){
                sql = sql + `AND password LIKE '%${userParams.password}%'`;
            }
        }

    db.loadQuery(sql);
}

exports.loginUser = async (user) => {
    let sql = `SELECT * FROM usuarios WHERE email = '${user.email}' and password = '${user.password}'`;
    let result = await db.loadQuery(sql);
    console.log(result)
    
}