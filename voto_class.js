class Eleitor{
    constructor(nome,idade, titulo){

    this.nome = nome
    this.idade = idade
    this.titulo = titulo
}

verificaVoto(){


    let idade = this.idade

    if(idade<16){


        console.log(" Abaixo da idade miníma para votar")
    }
            else if((idade>=16)&&(idade<18)){
                console.log(" idade onde o voto é facultativo")
                return (" Abaixo onde o voto é obrigatório")
            }
            else if((idade>=18)&&(idade<70)){
                console.log(" idade onde o voto é obrigatório")
                return (" Abaixo onde o voto é obrigatório")
        }
        else if(idade > 70){
            console.log(" idade onde o voto é facultativo")
            return (" Abaixo onde o voto é obrigatório")
    }

}

}