import Sorvete from '../models/sorvete.js'

describe('Classe Sorvete', () => {

    test('deve calcular corretamente a área da base', () => {
        const sorvete = new Sorvete(2, 10)

        const area = sorvete.calcularAreaBase()

        expect(area).toBeCloseTo(Math.PI * 4) // π * r²
    })

    test('deve calcular corretamente o volume', () => {
        const sorvete = new Sorvete(2, 10)

        const volume = sorvete.calcularVolume()

        expect(volume).toBeCloseTo(Math.PI * 4 * 10)
    })

    test('deve calcular corretamente o peso unitário', () => {
        const sorvete = new Sorvete(2, 10)

        const peso = sorvete.getPesoUnitario()

        const volumeEsperado = Math.PI * 4 * 10
        const pesoEsperado = volumeEsperado * 0.6

        expect(peso).toBeCloseTo(pesoEsperado)
    })

})