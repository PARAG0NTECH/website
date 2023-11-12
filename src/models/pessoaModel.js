var database = require("../database/config");

function cadastrar(nome, email, sexo) {
    var instrucao =
        `
    insert into tb_users(name, email, password)  values
	('${nome}', '${email}', '${sexo}');
    `

    return database.executar(instrucao);
}
function listarUsers() {
    var instrucao = `
        select * from tb_users;
    `
    return database.executar(instrucao);
}
function gerarUserAtual(id) {
    var instrucao = `
        select * from tb_users where id = ${id};
    `
    return database.executar(instrucao);
}
function editarUser(idPessoa, nome, email, password){
    var instrucao = `
        update tb_users set name = '${nome}', email = '${email}', password = '${password}' where id = '${idPessoa}';
    `
    return database.executar(instrucao);
}

function deletarUser(idPessoa){
    var instrucao = `
        delete from tb_users where id = ${idPessoa}
    `
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listarUsers,
    editarUser,
    deletarUser,
    gerarUserAtual

}