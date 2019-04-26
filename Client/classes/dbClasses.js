function User(nome, tipo_usuario, email, password, cod_usuario) {
    this.cod_usuario = cod_usuario;
    this.nome = nome;
    this.tipo_usuario = tipo_usuario;
    this.email = email;
    this.password = password;
}

function Active(cod_ativo, __cod_usuario, descricao, empresa) {
    this.cod_ativo = cod_ativo;
    this.__cod_usuario = __cod_usuario;
    this.descricao = descricao;
    this.empresa = empresa;
}

function Transaction(cod_transacao, ativo, __cod_usuario, quantidade, preco, data_transacao) {
    this.cod_transacao = cod_transacao;
    this.ativo = ativo;
    this.__cod_usuario = __cod_usuario;
    this.quantidade = quantidade;
    this.preco = preco;
    this.data_transacao = data_transacao;
}

exports.Active = Active;
exports.Transaction = Transaction;
exports.User = User;