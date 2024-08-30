const caixaprincipal = document.querySelector(".caixa- principal");
const caixaperguntas = document.querySelector(".caixa-perguntas");
const caixaalternativas = document.querySelector(".caixa-alternativas");
const caixaresultado = document.querySelector(".caixa-resultado");
const textoresultao = document.querySelector(".texto-resultado ");

const perguntas = [



]//Arry de objeto contendo as perguntas e alternativas 
const perguntas = [ 
{ enunciado: "Qual a idade máxima que um cachorro pode chegar?", alternativas: [ 
    "15 anos",
     "20 anos"
     ],
     correta: 0 // A primeira alternativa é a correta }, 

} 
{
        enunciado: "Quantos dias há em um ano bissexto?", alternativas: [
         "365", 
         "366" 
        ],
         correta: 1 // A segunda alternativa é a correta 
         }, 
        { 
            enunciado: "Qual é o maior planeta do nosso sistema solar?",
             alternativas: [ 
                "Terra"
                 "Júpter" 
                ],

              correta: 1
             }, 

        { 
            enunciado: "Qual é a capital da França?", alternativas: 
            [ "Paris",
             "Londres" 
            ], 
            correta: 0 }, 

        { 
            enunciado: "Qual é a fórmula química da água?",
             alternativas: [ 
                "H2O", 
                "CO2"
             ],
              correta: 0
            }
]