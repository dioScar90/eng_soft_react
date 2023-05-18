import ListaProdutos from "./ListaProdutos";
import produtos from "./produtos";
import Carrinho from "./Carrinho";
import { useState } from "react";

export default function PaginaProdutos() {
    const [itens, setItens] = useState([]);

    const adicionarProduto = produto => {
        const itemAtual = itens.find(item => item.produto.id === produto.id) ?? { quantidade: 0, produto };
        const novoItem = { ...itemAtual, quantidade: itemAtual.quantidade + 1 };
        const outrosItens = itens.filter(item => item.produto.id !== produto.id);
        setItens([ ...outrosItens, novoItem ]);
    }

    return (
        <div className={`
            flex flex-col gap-10 justify-center items-center h-screen
        `}>
            <Carrinho itens={itens} />
            <ListaProdutos produtos={produtos} comprar={adicionarProduto} />
        </div>
    )
}