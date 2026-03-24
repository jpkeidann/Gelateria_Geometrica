// import Sorvete from "./models/sorvete.js"
// import Receita from "./models/receita.js"
// import Custo from "./models/custo.js"

// 1. Mapeando apenas os botões e áreas gerais
const botaoCalcular = document.getElementById('btn-calcular')
const botaoLimpar = document.getElementById('btn-limpar')
const areaResultado = document.getElementById('resposta')
const tamanho1T = document.getElementById('1t')
const tamanho5T = document.getElementById('5t')
const tamanho12T = document.getElementById('12t')

let tonelagem = 1

// Evento para fazer o select mudar o valor do input automaticamente
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
    
    const receita = new Receita()
    const ingredientes = receita.calcularIngredientes()

    const custo = new Custo()
    const precosTotal= custo.calcularCusto(ingredientes)

    const custoPorPizza = (custo.totalCusto / qtdePizza).toFixed(2)

    const relatorioNaTela = `
        <h3>Relatório: 1 Tonelada de Massa</h3>
        <p><strong>Custo total de produção:</strong> R$ ${custo.totalCusto}</p>
        <p><strong>Custo por pote de sorvete:</strong> R$ ${custoPorPizza}</p>
        
        <br>
        <h4>Tabela de Quantidades e Custos</h4>
        <table>
            <thead>
                <tr>
                    <th>Ingrediente</th>
                    <th>Quantidade</th>
                    <th>Custo (R$)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Qtde. Potes Peq.</td>
                    <td>${(custo).toFixed(2)} kg</td>
                    <td>R$ ${precosIngredientes.farinha}</td>
                </tr>
                <tr>
                    <td>Qtde. Potes Médios</td>
                    <td>${(qtdeIngredientes.agua / 1000).toFixed(2)} L</td>
                    <td>R$ ${precosIngredientes.agua}</td>
                </tr>
                <tr>
                    <td>Qtde. Potes Grandes</td>
                    <td>${(qtdeIngredientes.azeite / 1000).toFixed(2)} L</td>
                    <td>R$ ${precosIngredientes.azeite}</td>
                </tr>
            </tbody>
        </table>
    `

    // Injetando o relatório montado dentro da área de resposta
    areaResultado.innerHTML = relatorioNaTela
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