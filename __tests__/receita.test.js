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

    test('deve calcular corretamente os potes', () => {
        const receita = new Receita()

        const potes = receita.calcularQtdePotes(1)

        expect(potes.pequeno).toBe(Math.floor(1000000 / 400))
        expect(potes.medio).toBe(Math.floor(1000000 / 900))
        expect(potes.grande).toBe(Math.floor(1000000 / 1700))
    })

    test('não deve retornar potes fracionados', () => {
        const receita = new Receita()

        const potes = receita.calcularQtdePotes(0.5)

        expect(Number.isInteger(potes.pequeno)).toBe(true)
        expect(Number.isInteger(potes.medio)).toBe(true)
        expect(Number.isInteger(potes.grande)).toBe(true)
    })

})