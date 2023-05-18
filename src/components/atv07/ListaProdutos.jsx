import ProdutoItem from "./ProdutoItem";

export default function ListaProdutos(listaProdutosProps) {
    return (
        <div className="flex gap-2 flex-wrap">
            {listaProdutosProps.produtos.map(produto => {
                return <ProdutoItem key={produto.id} produto={produto} comprar={listaProdutosProps.comprar} />
            })}
        </div>        
    )
}