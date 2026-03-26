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

    calcularQtdeIngredientes(toneladas) {
        const fator = (toneladas * 1000000) / this.pesoBase

        this.receita = {
            leite: Number((this.leite * fator).toFixed(2)),
            acucar: Number((this.acucar * fator).toFixed(2)),
            creme: Number((this.creme * fator).toFixed(2)),
            doceLeite: Number((this.doceLeite * fator).toFixed(2))
        }

        return this.receita
    }

    calcularQtdePotesP(toneladas) {
        this.totalPotesP = Math.floor((toneladas * 1000000) / 400)
        return this.totalPotesP
    }
    
    calcularQtdePotesM(toneladas) {
        this.totalPotesM= Math.floor((toneladas * 1000000) / 900)
        return this.totalPotesM
    }
    
    calcularQtdePotesG(toneladas) {
        this.totalPotesG= Math.floor((toneladas * 1000000) / 1700)
        return this.totalPotesG
    }

    calcularQtdePotesT(){
        this.totalPotes = this.totalPotesG + this.totalPotesM + this.totalPotesP
        return this.totalPotes
    }
    

}