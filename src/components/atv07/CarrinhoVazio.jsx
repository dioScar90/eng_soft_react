// import { IconCircleX } from "@tabler/icons-react";

export default function CarrinhoVazio() {
    return (
        <div className="flex justify-center text-zinc-500">
            {/* <IconCircleX /> */}
            ❌
            <span>Nenhum item no carrinho</span>
        </div>
    )
}