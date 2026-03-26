import Custo from '../models/custo.js'

describe('Testes da Classe Custo (Sorvete de Doce de Leite)', () => {

    test('Deve iniciar com os preços padrão corretamente', () => {
        const custo = new Custo()

        expect(custo.leite).toBe(3.50)
        expect(custo.acucar).toBe(4.89)
        expect(custo.doceLeite).toBe(18.00) // ✅ corrigido
        expect(custo.creme).toBe(12.00)
    })

    test('Deve calcular o custo total corretamente (conversão g → kg)', () => {
        const custo = new Custo()

        const ingredientesMock = {
            leite: 100000,
            acucar: 2000,
            doceLeite: 5000, // ✅ corrigido
            creme: 1000
        }

        const total = custo.calcularCusto(ingredientesMock)

        expect(total).toBe(461.78)
    })

    test('Deve salvar o totalCusto corretamente', () => {
        const custo = new Custo()

        const ingredientesMock = {
            leite: 100000,
            acucar: 0,
            doceLeite: 0, // ✅ corrigido
            creme: 0
        }

        custo.calcularCusto(ingredientesMock)

        expect(custo.totalCusto).toBe(350)
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
            leite: 12345,
            acucar: 0,
            doceLeite: 0, // ✅ corrigido
            creme: 0
        }

        const total = custo.calcularCusto(ingredientesMock)

        expect(total).toBe(43.21)
    })

    test('Deve permitir preços dinâmicos (simulando inflação)', () => {
        const custo = new Custo(10, 5, 20, 15)

        const ingredientesMock = {
            leite: 100000,
            acucar: 1000,
            doceLeite: 1000, // ✅ corrigido
            creme: 1000
        }

        const total = custo.calcularCusto(ingredientesMock)

        expect(total).toBe(1040)
    })

})