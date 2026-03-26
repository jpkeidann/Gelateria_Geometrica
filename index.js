import Sorvete from "./models/sorvete.js"
import Receita from "./models/receita.js"
import Custo from "./models/custo.js"

// 1. Mapeando apenas os botões e áreas gerais
const botaoCalcular = document.getElementById('calcular')
const botaoLimpar = document.getElementById('btn_limpar')
const areaResultado = document.getElementById('res1')
const tamanho1T = document.getElementById('1t')
const tamanho5T = document.getElementById('5t')
const tamanho12T = document.getElementById('12t')

let tonelagem = 1

tamanho1T.addEventListener('click', (event) => {
    tonelagem = 1 
})

tamanho5T.addEventListener('click', (event) => {
    tonelagem = 5
})

tamanho12T.addEventListener('click', (event) => {
    tonelagem = 12
})

botaoCalcular.addEventListener('click', () => {
    const raio = Number(document.getElementById('raio').value)
    const altura = Number(document.getElementById('altura').value)

    const sorvete = new Sorvete(raio, altura)

    const pesoUnitario = Number(document.getElementById('tamanho').value)
    
    const receita = new Receita()
    const ingredientes = receita.calcularQtdeIngredientes()
    const qtdPotes = receita.calcularQtdePotes(pesoUnitario,tonelagem)

    const custo = new Custo()
    const precosTotal= custo.calcularCusto(ingredientes)

    // Injetando o relatório montado dentro da área de resposta
    areaResultado.innerHTML = `
        <h3>Relatório: 1 Tonelada de Massa</h3>
        <p><strong>Custo total de produção:</strong> R$ ${precosTotal}</p>
        <p><strong>Custo por pote de sorvete:</strong> R$ ${custo.custoPorPote(precosTotal, qtdPotes ) }</p>
        
        <br>
        <h4>Tabela de Quantidades e Custos</h4>
        <table>
            <thead>
                <tr>
                    <th>Ingrediente</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Qtde. Potes/td>
                    <td>${receita.calcularQtdePotes()}</td>
                </tr>
            </tbody>
        </table>
    `
})

// 3. Criando o evento para o botão "Limpar"
botaoLimpar.addEventListener('click', () => {
    // // Volta os campos para o valor padrão da receita original
    // document.getElementById('tamanho').value = "35"
    // document.getElementById('diametro').value = 35
    // document.getElementById('espessura').value = 0.5

    // Limpa a tela de resultado
    areaResultado.innerHTML = "<p>Insira os dados da produção do sorvete e " +
        "clique em 'Calcular Produção' para ver o custo, e quantidade de potes por produção.</p>"
})