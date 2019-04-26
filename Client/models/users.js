var db = require('../infra/db');
let User = require('../classes/dbClasses').User;
let user = new User(
    nome = "Alex Abreu Louzada",
    tipo_usuario = "1",
    email = "alexlouzada2009@gmail.com",
    password = "alex11021998"
)

exports.createUserObject = (user) => {
    if(user.cod_usuario){
        return new User(
            nome = user.nome,
            tipo_usuario = user.tipo_usuario,
            email = user.email,
            password = user.password,
            cod_usuario = user.cod_usuario
        )
    }else{
        return new User(
            nome = user.nome,
            tipo_usuario = user.tipo_usuario,
            email = user.email,
            password = user.password
        )
    }
}

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

exports.loginUser = (user) => {
    let sql = `SELECT * FROM usuarios WHERE email = '${user.email}' and password = '${user.password}'`;
    db.loadQuery(sql);
}