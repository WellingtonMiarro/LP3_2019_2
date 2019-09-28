const {Item} = require('./db');

const itens = [
{
    "area": "CET"
},
{
    "area": "CAE"
},
{
    "area": "MDIS"
},
{
    "area": "CHCSA"
},
{
    "area": "CBS"
},
{
    "area": "FIC"
}

];

//A funçao abaixo salva cada um dos itens array acima  no BD
//quando utilizar com o laço tradicional add async na função
const  salvarItens = async () => {
    await require('./db');
    //Versão com o laço for
    //vai interagir com cada elementos do vetor, (grava o primeiro e espera) async/await

    //for(let i=0; i < itens.length; i++){
      //  await Lista.create(itens[i])
   // }


    //Versão usando função ForEach
    //codigo curto: facil de compreenção. forEACH -> "para cada item"
    itens.forEach(async (item) => await Item.create(item));
};

//Invoca a função que salva os itens
salvarItens();