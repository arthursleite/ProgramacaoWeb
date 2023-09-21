function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// Função construtora Carrinho
function Carrinho() {
    this.produtos = [];
    let desconto = 0;

    const prompt = require("prompt-sync")();
    const input = prompt("O produto tem desconto? (s/n): ");
    if (input.toLowerCase() === "s") {
        desconto = (parseFloat(prompt("Quanto de desconto? ")) / 100);
    }

    this.adicionarProduto = function (produto, quantidade) {
        this.produtos.push({ produto, quantidade });
    };

    this.calcularValorTotal = function () {
        let total = 0;
        if (desconto === 0) {
            for (const item of this.produtos) {
                total += item.produto.preco * item.quantidade;
            }
        } else {
            for (const item of this.produtos) {
                total += (item.produto.preco - (item.produto.preco * desconto)) * item.quantidade;
            }
        }
        return total;
    };
}

const carrinho = new Carrinho();
carrinho.adicionarProduto(new Produto("Camiseta", 25.99), 2);
carrinho.adicionarProduto(new Produto("Calça Jeans", 49.99), 1);

console.log("Valor total:", carrinho.calcularValorTotal());
