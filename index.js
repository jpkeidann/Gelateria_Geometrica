import Sorvete from "./models/sorvete.js"
import Receita from "./models/receita.js"
import Custo from "./models/custo.js"

// 1. Mapeando apenas os botões e áreas gerais
const botaoCalcular = document.getElementById('calcular')
const botaoLimpar = document.getElementById('btn_limpar')
const areaResultado = document.getElementById('res1')
const ton1T = document.getElementById('1t')
const ton5T = document.getElementById('5t')
const ton12T = document.getElementById('12t')

let tonelagem = 1

ton1T.addEventListener('click', (event) => {
    tonelagem = 1
})
ton5T.addEventListener('click', (event) => {
    tonelagem = 5
})
ton12T.addEventListener('click', (event) => {
    tonelagem = 12
})

botaoCalcular.addEventListener('click', () => {
    const selectTamanho = document.getElementById('tamanho');
    const valorTamanho = selectTamanho.value; 

    const raio = Number(document.getElementById('raio').value)
    const altura = Number(document.getElementById('altura').value)
    let pesoUnitario = 0
    
    if (valorTamanho === "custom"){
        const sorvete = new Sorvete(raio, altura)
        pesoUnitario = sorvete.getPesoUnitario()
    } else {
        pesoUnitario = Number(valorTamanho)
    }

    const BotAtivo = document.getElementsByClassName('active')

    console.log(BotAtivo)
    
    console.log(pesoUnitario)
    const receita = new Receita()
    const ingredientes = receita.calcularQtdeIngredientes(tonelagem)
    const qtdPotes = receita.calcularQtdePotes(pesoUnitario,tonelagem)

    const custo = new Custo()
    const precosIngredientes = custo.calcularCusto(ingredientes)

    areaResultado.innerHTML = `
        <h3>Relatório: ${tonelagem} Tonelada(s) de Massa</h3>
        <p><strong>Custo total de produção:</strong> R$ ${custo.totalCusto}</p>
        <p><strong>Custo por pote de sorvete:</strong> R$ ${(custo.totalCusto / qtdPotes).toFixed(2)}</p>
        
        <br>
        <h4>Tabela de Quantidades e Custos</h4>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantidade</th>
                    <th>Custo Estimado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Leite</td>
                    <td>${(ingredientes.leite / 1000).toFixed(2)} kg</td>
                    <td>R$ ${precosIngredientes.leite.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Acucar</td>
                    <td>${(ingredientes.acucar / 1000).toFixed(2)} kg</td>
                    <td>R$ ${precosIngredientes.acucar.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>DoceLeite</td>
                    <td>${(ingredientes.doceLeite / 1000).toFixed(2)} kg</td>
                    <td>R$ ${precosIngredientes.doceLeite.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Creme</td>
                    <td>${(ingredientes.creme / 1000).toFixed(2)} kg</td>
                    <td>R$ ${precosIngredientes.creme.toFixed(2)}</td>
                </tr>
            </tbody>
        </table>
    `
})

botaoLimpar.addEventListener('click', () => {

    // Limpa a tela de resultado
    areaResultado.innerHTML = "<p>Insira os dados da produção do sorvete e " +
        "clique em 'Calcular' para ver o custo, e quantidade de potes por produção.</p>"
})