export default class Sorvete {
    constructor(raio, altura) {
        this.raio = this.raio
        this.altura = altura
        this.densidade = 0.6 // densidade do sorvete em g/cm³ 
    }

    calcularAreaBase() {
        let area = Math.PI * this.raio * this.raio
        return area
    }

    calcularVolume() {
        let volume = this.altura * this.calcularAreaBase()
        return volume
    }

    getPesoUnitario() {
        return this.calcularVolume() * this.densidade
    }
}