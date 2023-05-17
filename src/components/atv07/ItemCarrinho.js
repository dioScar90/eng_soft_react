import Produto from "./Produto";

// export default interface ItemCarrinho {
//     produto: Produto
//     quantidade: number
// }

export default function ItemCarrinho() {
    return {
        produto: Produto,
        quantidade: 0
    }
}