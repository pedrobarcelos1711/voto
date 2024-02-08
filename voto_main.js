let resposta = document.getElementById('resposta')
let verificar =  document.getElementById('verificar')

verificar.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let titulo = document.getElementById('titulo').value

    console.log(" dados do formulário " ,nome,idade,titulo)

    const cidadao = new Eleitor()

    cidadao.nome = nome
    cidadao.idade = idade
    cidadao.titulo = titulo

    console.log(" Instância do objeto" ,cidadao)

})