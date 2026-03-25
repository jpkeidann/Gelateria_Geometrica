import Custo from '../models/custo.js'

describe('Testes da Classe Custo (Sorvete de Doce de Leite)', () => {

    test('Deve iniciar com os preços padrão corretamente', () => {
        const custo = new Custo()

        expect(custo.leite).toBe(3.50)
        expect(custo.acucar).toBe(4.89)
        expect(custo.doceDeLeite).toBe(18.00)
        expect(custo.creme).toBe(12.00)
    })

    test('Deve calcular o custo total corretamente (conversão g → kg)', () => {
        const custo = new Custo()

        const ingredientesMock = {
            leite: 100000,        // 100 kg
            acucar: 2000,         // 2 kg
            doceDeLeite: 5000,    // 5 kg
            creme: 1000           // 1 kg
        }

        const total = custo.calcularCusto(ingredientesMock)

        // cálculo esperado:
        // (100 * 3.5) + (2 * 4.89) + (5 * 18) + (1 * 12)
        // 350 + 9.78 + 90 + 12 = 461.78

        expect(total).toBe(461.78)
    })

    test('Deve salvar o totalCusto corretamente', () => {
        const custo = new Custo()

        const ingredientesMock = {
            leite: 100000,
            acucar: 0,
            doceDeLeite: 0,
            creme: 0
        }

        custo.calcularCusto(ingredientesMock)

        expect(custo.totalCusto).toBe(350) // 100kg * 3.5
    })

    test('Deve calcular o custo por pote corretamente', () => {
        const custo = new Custo()

        const totalCusto = 1000
        const qtdPotes = 100

        const resultado = custo.custoPorPote(totalCusto, qtdPotes)

        expect(resultado).toBe(10)
    })

    test('Deve respeitar duas casas decimais (RN04)', () => {
        const custo = new Custo()

        const ingredientesMock = {
            leite: 12345,       // 12.345 kg
            acucar: 0,
            doceDeLeite: 0,
            creme: 0
        }

        const total = custo.calcularCusto(ingredientesMock)

        // 12.345 * 3.5 = 43.2075 → 43.21
        expect(total).toBe(43.21)
    })

    test('Deve permitir preços dinâmicos (simulando inflação)', () => {
        const custo = new Custo(10, 5, 20, 15)

        const ingredientesMock = {
            leite: 100000,     // 100 kg
            acucar: 1000,      // 1 kg
            doceDeLeite: 1000, // 1 kg
            creme: 1000        // 1 kg
        }

        const total = custo.calcularCusto(ingredientesMock)

        // 100*10 + 1*5 + 1*20 + 1*15 = 1000 + 5 + 20 + 15 = 1040

        expect(total).toBe(1040)
    })

})