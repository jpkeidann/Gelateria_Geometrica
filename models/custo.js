export default class Custo {
    constructor(leite = 3.50, acucar = 4.89, doceLeite = 18.00, creme = 12.00) {
        // preço por kg
        this.leite = leite
        this.acucar = acucar
        this.doceLeite = doceLeite
        this.creme = creme


        this.totalCusto = 0
        this.preco = {}
    }


    calcularCusto(ingredientes) {
        const total =
            (ingredientes.leite / 1000) * this.leite +
            (ingredientes.acucar / 1000) * this.acucar +
            (ingredientes.doceLeite / 1000) * this.doceLeite +
            (ingredientes.creme / 1000) * this.creme


        this.totalCusto = Number(total.toFixed(2))


        return this.totalCusto
    }


    custoPorPote(totalCusto, qtdPotes ) {
        return Number((totalCusto / qtdPotes).toFixed(2))
    }


   
}
