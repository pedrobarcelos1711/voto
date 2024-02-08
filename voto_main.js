let resposta = document.getElementById('resposta')
let verificar =  document.getElementById('verificar')

verificar.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let titulo = document.getElementById('titulo').value

    console.log(nome,idade,titulo)
})