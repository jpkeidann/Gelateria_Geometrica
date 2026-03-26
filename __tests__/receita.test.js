import Receita from '../models/receita.js'

describe('Classe Receita', () => {

    test('deve calcular corretamente os ingredientes para 1 tonelada', () => {
        const receita = new Receita()

        const resultado = receita.calcularQtdeIngredientes(1)

        expect(resultado.leite).toBeCloseTo(555555.56)
        expect(resultado.acucar).toBeCloseTo(222222.22)
        expect(resultado.creme).toBeCloseTo(166666.67)
        expect(resultado.doceLeite).toBeCloseTo(55555.56)
    })

    test('deve calcular corretamente os potes pequenos', () => {
        const receita = new Receita()

        const potes = receita.calcularQtdePotes(400, 1)

        expect(potes).toBe(Math.floor(1000000 / 400))
    })

    test('deve calcular corretamente os potes médios', () => {
        const receita = new Receita()

        const potes = receita.calcularQtdePotes(900, 1)

        expect(potes).toBe(Math.floor(1000000 / 900))
    })

    test('deve calcular corretamente os potes grandes', () => {
        const receita = new Receita()

        const potes = receita.calcularQtdePotes(1700, 1)

        expect(potes).toBe(Math.floor(1000000 / 1700))
    })

    test('não deve retornar potes fracionados', () => {
        const receita = new Receita()

        const potes = receita.calcularQtdePotes(400, 0.5)

        expect(Number.isInteger(potes)).toBe(true)
    })

})