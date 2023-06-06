import Moeda from "./Moeda";

export default function CarrinhoItem(propsItemCarrinho) {
    return (
        <div className={`
            flex items-center gap-2 rounded-full bg-blue-500 px-4
        `}>
            <span className={`
                flex justify-center items-center
                w-10 h-7 rounded-full p-2 bg-blue-700
            `}>
                {propsItemCarrinho.quantidade}
            </span>
            <span>
                {propsItemCarrinho.produto.nome}
            </span>
            <span>
                {Moeda.formatar(propsItemCarrinho.produto.preco * propsItemCarrinho.quantidade)}
            </span>
        </div>
    )
}