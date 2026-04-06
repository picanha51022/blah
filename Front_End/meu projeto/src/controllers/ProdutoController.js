// src/controllers/ProdutoController.js
const Produto = require('../models/produto');

function criarProduto(nome, preco, descricao) {
    const novoProduto = new Produto(nome, preco, descricao);
    return novoProduto;
}

module.exports = { criarProduto };