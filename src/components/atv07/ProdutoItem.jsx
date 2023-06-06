import Moeda from "./Moeda";

export default function ProdutoItem(produtoItemProps) {
    const { produto } = produtoItemProps;
    
    return (
        <div className={`
            flex flex-col rounded-md
            border bg-gray-300
        `}>
            <div className="flex flex-col p-3">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-black">{produto.nome}</div>
                    <div className="text-green-500 font-bold">{Moeda.formatar(produto.preco)}</div>
                </div>
                <div>
                    <div className="text-gray-500">{produto.descricao}</div>
                </div>
                <div>
                    <button className="botao flex justify-center gap-2 w-full"
                        onClick={() => produtoItemProps.comprar(produto)}
                    >
                        🛒 Comprar
                    </button>
                </div>
            </div>
        </div>
    )
}