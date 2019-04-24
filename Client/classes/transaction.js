export default class Transaction {
    constructor(cod_transacao, ativo, __cod_usuario, quantidade, preco, data_transacao) {
        this.cod_transacao = cod_transacao;
        this.ativo = ativo;
        this.__cod_usuario = __cod_usuario;
        this.quantidade = quantidade;
        this.preco = preco;
        this.data_transacao = data_transacao;
    }
}