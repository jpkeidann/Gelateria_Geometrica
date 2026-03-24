export default class Receita {
    // valores padrão da receita base de 900g (doce de leite)
    constructor(leite = 500, acucar = 200, creme = 150, doceLeite = 50) {
        this.leite = leite
        this.acucar = acucar
        this.creme = creme
        this.doceLeite = doceLeite

        // peso base da receita de 900 gramas
        this.pesoBase = this.leite + this.acucar + this.creme + this.doceLeite
        this.receita = {}
        this.totalPotes = 0
    }

    calcularQtdeIngredientes(toneladas = 1) {
        const fator = (toneladas * 1000000) / this.pesoBase

        this.receita = {
            leite: Number((this.leite * fator).toFixed(2)),
            acucar: Number((this.acucar * fator).toFixed(2)),
            creme: Number((this.creme * fator).toFixed(2)),
            doceLeite: Number((this.doceLeite * fator).toFixed(2))
        }

        return this.receita
    }

    calcularQtdePotes(pesoUnitario, toneladas = 1) {
        this.totalPotes = (toneladas * 1000000) / pesoUnitario
        this.verificarQtdePotes()
        return this.totalPotes
    }

    verificarQtdePotes() {
        // regra de negócio: apenas potes inteiros
        this.totalPotes = Math.floor(this.totalPotes)
    }
}