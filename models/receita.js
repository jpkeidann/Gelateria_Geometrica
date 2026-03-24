export default class Receita {
    constructor() {
        // base de 900g (doce de leite)
        this.leite = 500
        this.acucar = 200
        this.creme = 150
        this.doceLeite = 50

        this.pesoBase = this.leite + this.acucar + this.creme + this.doceLeite
        this.receita = {}
    }

    calcularIngredientes(toneladas) {
        const totalGramas = toneladas * 1000000
        const fator = totalGramas / this.pesoBase
        
        this.receita = {
            leite: Number((this.leite * fator).toFixed(2)),
            acucar: Number((this.acucar * fator).toFixed(2)),
            creme: Number((this.creme * fator).toFixed(2)),
            doceLeite: Number((this.doceLeite * fator).toFixed(2))
        }

        return this.receita
    }
}