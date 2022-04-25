//3º Checkpoint de Programação Imperativa - April 2022

//Grupo:
//Kevilyn
//Tamires
//Cadu Menezes
//Jonathas
//Ricardo Tani
//Tiago Souza


//passo 1
function Pessoa(nome, notas, qtdFaltas) {
    this.nome = nome;
    this.notas = notas;
    this.qtdFaltas = qtdFaltas;
    //fim do passo 1

    //passo 2
    this.calcularMedia = function () {
        let somaNotas = 0;
        for (let i = 0; i < this.notas.length; i++) {
            somaNotas += notas[i];
        }
        return somaNotas / this.notas.length;
    }

    this.faltas = function () {
        this.qtdFaltas++;

    }
    //fim do passo 2

}

let pessoas = [];

const pessoa1 = new Pessoa("Kevilyn", [10, 7, 8], 1);
const pessoa2 = new Pessoa("Tamires", [10, 8, 7], 3);
const pessoa3 = new Pessoa("Cadu", [8, 6, 9], 5);
const pessoa4 = new Pessoa("Jonathas", [9, 7, 8], 2);
const pessoa5 = new Pessoa("Ricardo Tani", [10, 8, 8], 3);
const pessoa6 = new Pessoa("Tiago Souza", [7, 9, 8], 0);


pessoas.push(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5, pessoa6)

//passo 3

const curso = {
    nomeCurso: "CTD",
    notaAprovacao: 7,
    numeroFaltas: 4,
    listaAlunos: pessoas,
    arrBoleanos: lista=[], //lista do topico 6.

    //fim do passo 3

    //passo 4
    adicionarEstudante: function (nome, notas, qtdFaltas) {

        this.listaAlunos.push(new Pessoa(nome, notas, qtdFaltas))

    },
    //fim do passo 4

    //passo 5

    resultado: function (pessoa) {
    
            if (pessoa.calcularMedia() >= curso.notaAprovacao && pessoa.qtdFaltas < curso.numeroFaltas) {
                console.log(`${pessoa.nome} foi Aprovado`)

            } else if (pessoa.calcularMedia() >= 1.1*curso.notaAprovacao && pessoa.qtdFaltas == curso.numeroFaltas) {
                console.log(`${pessoa.nome} foi Aprovado`)

            } else {
                console.log(`${pessoa.nome}  foi Reprovado`)
            }

        },

    //fim do passo 5

    //passo 6

    resultadoFinal: function(){
        for (let i = 0; i < this.listaAlunos.length; i++) {

            this.listaAlunos[i]

         if (this.listaAlunos[i].calcularMedia() >= curso.notaAprovacao && this.listaAlunos[i].qtdFaltas < curso.numeroFaltas) {
             this.arrBoleanos.push(true)
 
         } else if (this.listaAlunos[i].calcularMedia() >= 1.1*curso.notaAprovacao && this.listaAlunos[i].qtdFaltas == curso.numeroFaltas) {
             this.arrBoleanos.push(true)
 
         } else {
             this.arrBoleanos.push(false)
         }
        }
 
     }
 
     //fim do passo 6

}


//Executando o passo 6
curso.resultadoFinal()
console.log(curso.arrBoleanos);