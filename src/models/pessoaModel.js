var database = require("../database/config");

function cadastrar(nome, email, senha, tipoUser) {
    var instrucao =
        `
    insert into tb_users(name, email, type_user , password)  values
	('${nome}', '${email}', '${tipoUser}' ,'${senha}');
    `

    return database.executar(instrucao);
}

function cadastrarEmpresa(nomeEmpresa, cnpjEmpresa, idAccount) {
    var instrucao =
        `
    insert into tb_companies(name, cnpj, tb_users_id) values
	('${nomeEmpresa}', '${cnpjEmpresa}', '${idAccount}');
    `
    return database.executar(instrucao);
}

function cadastrarMetrica(idEmpresa, ram, cpu, disk) {
    var instrucao01 = `truncate table tb_alerts;`;
    database.executar(instrucao01); 
    var instrucao = `
    INSERT INTO tb_alerts (id, tb_companies_id, percentual_cpu, percentual_disk, percentual_ram)
    VALUES (1, ${idEmpresa}, ${cpu}, ${disk}, ${ram});
    
`;

return database.executar(instrucao);
}

function listarEmpresas() {
    var instrucao = `
        select * from tb_companies;
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
        delete from tb_users where id = ${idPessoa};
    `
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listarUsers,
    editarUser,
    deletarUser,
    gerarUserAtual,
    cadastrarEmpresa,
    cadastrarMetrica,
    listarEmpresas
}