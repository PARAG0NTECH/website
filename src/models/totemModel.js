var database = require("../database/config");

function cadastrar(nome, email, senha, tipoUser) {
    var instrucao =
        `
    insert into tb_users(name, email, type_user , password)  values
	('${nome}', '${email}', '${tipoUser}' ,'${senha}');
    `
    return database.executar(instrucao);
}

function listarTotem() {
    var instrucao = `
        select * from tb_computers;
    `
    return database.executar(instrucao);
}

function editarTotem(idTotem){
    var instrucao = `
        update tb_computers set name = '${nome}', email = '${email}', password = '${password}' where id = '${idPessoa}';
    `
    return database.executar(instrucao);
}

function metricasTotem(idTotem, id_companies){
    var instrucao = `
        select * from tb_computers where id = ${idTotem} and where tb_companies_id = ${id_companies}; 
    `
    return database.executar(instrucao);
}

function deletarTotem(idTotem){
    var instrucao = `
        delete from tb_computers where id = ${idTotem};
    `
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listarTotem,
    metricasTotem,
    editarTotem,
    deletarTotem,
}