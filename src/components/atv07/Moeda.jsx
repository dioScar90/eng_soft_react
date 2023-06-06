export default class Moeda {
    static formatar(valor) {
        return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
    }
}