import CarrinhoItem from "./CarrinhoItem";
import CarrinhoVazio from "./CarrinhoVazio";
import Moeda from "./Moeda";

export default function Carrinho(carrinhoProps) {
    const total = carrinhoProps.itens.reduce((soma, item) => {
        return soma + item.quantidade * item.produto.preco;
    }, 0)

    return (
        <div className="flex flex-col border border-white rounded-md overflow-hidden w-4/5">
            <div className="flex justify-between items-center bg-gray-200 text-3xl p-3">
                <span>Carrinho</span>
                <span>{Moeda.formatar(total)}</span>
            </div>
            <div className="flex gap-5 p-5">
                {carrinhoProps.itens.length === 0 ? (
                    <CarrinhoVazio />
                ) : (
                    carrinhoProps.itens.map((item, i) => {
                        return <CarrinhoItem key={i} { ...item } />
                    })
                )}

                <div className="flex justify-end w-screen">
                    <button className="botao !bg-red-700 self-end flex justify-center gap-2 w-100"
                        onClick={() => carrinhoProps.zerar()}
                    >
                        🛒 Zerar carrinho
                    </button>
                </div>
            </div>
        </div>
    )
}