import ProdutoItem from "./ProdutoItem";
import Produto from "./Produto";

// const getProduto = () => ({
//     id: 1,
//     nome: '',
//     preco: 1.00,
//     descricao: '',
//     imagem: ''
// })

const getListaProdutosProps = () => ({
    produtos: [],
    comprar: (produto) => { }
})

export default function ListaProdutos(listaProdutosProps) {
    return (
        <div className="flex gap-2 flex-wrap">
            {listaProdutosProps.produtos.map(produto => {
                return <ProdutoItem key={produto.id} produto={produto} comprar={listaProdutosProps.comprar} />
            })}
        </div>        
    )
}