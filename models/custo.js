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
        this.preco = {
            leite: (ingredientes.leite / 1000) * this.leite ,
            acucar:(ingredientes.acucar / 1000) * this.acucar ,
            doceLeite:(ingredientes.doceLeite / 1000) * this.doceLeite ,
            creme:(ingredientes.creme / 1000) * this.creme
        }

        this.somarTotalCusto()

        return this.preco
    }

    custoPorPote(totalCusto, qtdPotes ) {
        return Number((totalCusto / qtdPotes).toFixed(2))
    }

    somarTotalCusto() {
    const somaBruta = (this.preco.leite || 0) + 
                      (this.preco.acucar || 0) + 
                      (this.preco.doceLeite || 0) +  
                      (this.preco.creme || 0);
    
    this.totalCusto = Number(somaBruta.toFixed(2));
}
   
}