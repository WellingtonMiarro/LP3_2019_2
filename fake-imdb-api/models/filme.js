'use strict';
module.exports = (sequelize, DataTypes) => {
  const Filme = sequelize.define('filme', {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ano: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direcao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sinopse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nota: {
        type: DataTypes.REAL,
        allowNull: false
      },
      genero: {
        type: DataTypes.STRING,
        allowNull: false,
        len:["Comédia","Ação","Terror","Suspense","Romântico"] 
      }
  }, 
  {});

  sequelize.sync()
  .then(() => Filme.create(
    { 
      titulo: "Divertida Mente",
      ano: 2015,
      direcao: "Pete Docter",
      sinopse:"Depois que a jovem Riley é arrancada de sua vida no Centro-Oeste e se mudou para São Francisco, suas emoções - alegria, medo, raiva, repulsa e tristeza - conflitam sobre a melhor maneira de navegar em uma nova cidade, casa e escola.",
      nota: 8.2,
      genero: "Comédia" 
  })).then(() => Filme.create(
    { 
      titulo: "Minha Mãe é uma Peça - O Filme",
      ano: 2013,
      direcao: "André Pellenz",
      sinopse:"Depois de outra briga com os filhos, Dona Hermínia decide tirar um tempo deles e se esconde na casa de sua tia, onde ela relembra os filhos em uma época em que eles ainda precisavam dela.",
      nota: 6.8,
      genero: "Comédia" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Sierra Burgess é uma Loser",
      ano: 2018,
      direcao: "Ian Samuels",
      sinopse:"Um caso de identidade equivocada resulta em romance inesperado quando a garota mais popular do ensino médio e o maior perdedor devem se unir para conquistar suas paixões.",
      nota: 5.9,
      genero: "Comédia" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Ana e Vitória",
      ano: 2018,
      direcao: "Matheus Souza",
      sinopse:
       "Duas garotas têm um encontro casual e instantaneamente fazem amizade. Enquanto tentam se encontrar, eles decidem seguir a música juntos.",
      nota: 6.7,
      genero: "Comédia"
     }
  )).then(() => Filme.create(
    { 
      titulo: "As Branquelas",
      ano: 2004,
      direcao: "Keenen Ivory Wayans",
      sinopse:"Dois agentes desonrados do FBI se disfarçam, em um esforço para proteger as herdeiras do hotel, as Irmãs Wilson, de uma trama de seqüestro.",
      nota: 5.6,
      genero: "Comédia" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Gente Grande",
      ano: 2010,
      direcao: "Dennis Dugan",
      sinopse:"Após o falecimento do treinador de basquete do ensino médio, cinco bons amigos e ex-colegas de equipe se reúnem para um fim de semana de férias em quatro de julho.",
      nota: 5.9,
      genero: "Comédia" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "A Escolha Perfeita",
      ano: 2012,
      direcao: "Jason Moore",
      sinopse:"Beca, caloura da Universidade de Barden, é convidada a ingressar no The Bellas, o grupo de cantoras femininas de sua escola. Injetando energia necessária em seu repertório, os Bellas enfrentam seus rivais em uma competição no campus.",
      nota: 7.2,
      genero: "Comédia"
     }
  )).then(() => Filme.create(
    { titulo: "Morte no Funeral",
    ano: 2007,
    direcao: "Frank Oz",
    sinopse:"O caos ocorre quando um homem tenta expor um segredo obscuro sobre um patriarca recentemente falecido de uma família britânica disfuncional.",
    nota: 7.4,
    genero: "Comédia"
   }
  )).then(() => Filme.create(
    { 
      titulo: "Os Estagiários",
      ano: 2013,
      direcao: "Shawn Levy",
      sinopse: "Dois vendedores cujas carreiras foram torpedeadas pela era digital encontram seu cobiçado estágio no Google, onde devem competir com um grupo de jovens gênios e experientes em tecnologia paraconseguir um emprego.",
      nota: 6.3,
      genero: "Comédia" 
    }
  ))
  .then(() => Filme.create(
    { 
      titulo: "Questão de tempo",
      ano: 2013,
      direcao: "Richard Curtis",
      sinopse:"Aos 21 anos, Tim descobre que pode viajar no tempo e mudar o que acontece e aconteceu em sua própria vida. Sua decisão de tornar seu mundo um lugar melhor ao conseguir uma namorada acaba não sendo tão fácil quanto você imagina.",
      nota: 7.8,
      genero: "Romance" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Simplesmente Acontece",
      ano: 2014,
      direcao: "Christian Ditter",
      sinopse: "Rosie e Alex são melhores amigos desde os 5 anos, então eles não poderiam estar certos um para o outro ... ou poderiam? Quando se trata de amar, viver e fazer as escolhas certas, esses dois são seus piores inimigos.",
      nota: 7.2,
      genero: "Romance" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Hoje Eu Quero Voltar Sozinho",
      ano: 2014,
      direcao: "Daniel Ribeiro",
      sinopse: "Leonardo is a blind teenager searching for independence. His everyday life, the relationship with his best friend, Giovana, and the way he sees the world change completely with the arrival of Gabriel.",
      nota: 7.9,
      genero: "Romance" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "A Culpa é das Estrelas",
      ano: 2014,
      direcao: "Josh Boone",
      sinopse:"Dois pacientes com câncer na adolescência iniciam uma jornada de afirmação da vida para visitar um autor recluso em Amsterdã.",
      nota: 7.7,
      genero: "Romance" 
    }
  )).then(() => Filme.create(
    {
      titulo: "Com Amor, Simon",
     ano: 2018,
     direcao: "Greg Berlanti",
     sinopse:"Simon Spier mantém um grande segredo de sua família, amigos e todos os colegas de classe: ele é gay. Quando esse segredo é ameaçado, Simon deve enfrentar todos e chegar a um acordo com sua identidade.",
     nota: 7.6,
     genero: "Romance" 
   }
  )).then(() => Filme.create(
    {
      titulo: "Para Todos os Garotos que Já Amei",
     ano: 2018,
     direcao: "Susan Johnson",
     sinopse:"As cartas de amor secretas de uma adolescente são expostas e causam estragos em sua vida amorosa.",
     nota: 7.2,
     genero: "Romance" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Como Eu Era Antes de Você",
      ano: 2016,
      direcao: "Thea Sharrock",
      sinopse:"Uma garota em uma cidade pequena forma um vínculo improvável com um homem recentemente paralisado que ela está cuidando.",
      nota: 7.4,
      genero: "Romance" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Alex Strangelove",
      ano: 2018,
      direcao: "Craig Johnson",
      sinopse: "Alex, presidente da turma do colegial, nerd e estudante A, está namorando Claire há muito tempo. Eles decidem dormir juntos, mas então ele conhece um cara gay e ele está confuso.",
      nota: 6.3,
      genero: "Romance" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Perfeita Pra Você",
      ano: 2018,
      direcao: "Stephanie Laing",
      sinopse:"Um casal que se conhece desde os oito está destinado a ficar juntos até a morte separá-los.",    nota: 6.4,
      genero: "Romance" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Me Chame pelo Seu Nome",
      ano: 2017,
      direcao: "Luca Guadagnino",
      sinopse: "Na Itália dos anos 80, um romance floresce entre um estudante de dezessete anos e o homem mais velho contratado como assistente de pesquisa de seu pai.",
      nota: 7.9,
      genero: "Romance" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Vingadores: Guerra Infinita",
      ano: 2018,
      direcao: "Anthony Russo, Joe Russo",
      sinopse:"Os Vingadores e seus aliados devem estar dispostos a sacrificar todos na tentativa de derrotar o poderoso Thanos antes que sua explosão de devastação e ruína ponha um fim ao universo.",
      nota: 8.5,
      genero: "Ação" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Guardiões da Galáxia",
      ano: 2014,
      direcao: "James Gunn",
      sinopse: "Um grupo de criminosos intergaláticos deve se unir para parar um guerreiro fanático com planos de limpar o universo.",
      nota: 8,
      genero: "Ação" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Doutor Estranho",
      ano: 2016,
      direcao: "Scott Derrickson",
      sinopse: "Enquanto em uma jornada de cura física e espiritual, um neurocirurgião brilhante é atraído para o mundo das artes místicas.",
      nota: 7.5,
      genero: "Ação" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Homem de Ferro",
      ano: 2008,
      direcao: "Jon Favreau",
      sinopse:"Depois de ser mantido em cativeiro em uma caverna afegã, o engenheiro bilionário Tony Stark cria uma armadura única e armada para combater o mal.",
      nota: 7.9,
      genero: "Ação" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Thor",
      ano: 2011,
      direcao: "Kenneth Branagh",
      sinopse: "O poderoso, mas arrogante deus Thor, é expulso de Asgard para viver entre os humanos em Midgard (Terra), onde ele logo se torna um dos seus melhores defensores.",
      nota: 7,
      genero: "Ação" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Homem-Formiga",
      ano: 2015,
      direcao: "Peyton Reed",
      sinopse:"Armado com um super traje com a incrível capacidade de diminuir em escala, mas aumentar em força, o ladrão de gatos Scott Lang deve abraçar seu herói interior e ajudar seu mentor, Dr. Hank Pym, a planejar e realizar um assalto que salvará o mundo.",
      nota: 7.3,
      genero: "Ação"
     }
  )).then(() => Filme.create(
    { 
      titulo: "Pantera Negra",
      ano: 2018,
      direcao: "Ryan Coogler",
      sinopse: "TChalla, herdeiro do reino oculto mas avançado de Wakanda, deve avançar para liderar seu povo em um novo futuro e enfrentar um desafiante do passado de seu país.",
      nota: 7.3,
      genero: "Ação" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Capitã Marvel",
      ano: 2019,
      direcao: "Anna Boden, Ryan Fleck",
      sinopse: "Carol Danvers se torna um dos heróis mais poderosos do universo quando a Terra é pega no meio de uma guerra galáctica entre duas raças alienígenas.",
      nota: 7,
      genero: "Ação" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Logan",
      ano: 2017,
      direcao: "James Mangold",
      sinopse: "Em um futuro em que os mutantes estão quase extintos, Logan, idoso e cansado, leva uma vida tranquila. Mas quando Laura, uma criança mutante perseguida por cientistas, procura por ele, ele deve levá-la em segurança.",
      nota: 8.1,
      genero: "Ação" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "X-Men: Dias de um Futuro Esquecido",
      ano: 2014,
      direcao: "Bryan Singer",
      sinopse: "Os X-Men enviam Wolverine ao passado em um esforço desesperado para mudar a história e impedir um evento que resulta em destruição para humanos e mutantes.",
      nota: 8,
      genero: "Ação" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "O Quarto de Jack",
      ano: 2015,
      direcao: "Lenny Abrahamson",
      sinopse: "Mantida em cativeiro por 7 anos em um espaço fechado, uma mulher e seu filho finalmente ganham sua liberdade, permitindo que o menino experimente o mundo exterior pela primeira vez.",
      nota: 8.2,
      genero: "Suspense"
     }
  )).then(() => Filme.create(
    { 
      titulo: "Garota Exemplar",
      ano: 2014,
      direcao: "David Fincher",
      sinopse: "Com o desaparecimento de sua esposa se tornando o foco de um intenso circo da mídia, um homem vê os holofotes voltados para ele quando se suspeita que ele pode não ser inocente.",
      nota: 8.1,
      genero: "Suspense" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Um lugar Silencioso",
      ano: 2018,
      direcao: "John Krasinski",
      sinopse: "Em um mundo pós-apocalíptico, uma família é forçada a viver em silêncio enquanto se esconde de monstros com audição ultra-sensível.",
      nota: 7.5,
      genero: "Terror" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "O Massacre da Serra Elétrica",
      ano: 1974,
      direcao: "Tobe Hooper",
      sinopse: "Dois irmãos e três de seus amigos a caminho de visitar o túmulo de seu avô no Texas acabam sendo vítimas de uma família de psicopatas canibais e precisam sobreviver aos terrores do cara de couro e de sua família.",
      nota: 7.5,
      genero: "Terror" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "It: A Coisa",
      ano: 2017,
      direcao: "Andy Muschietti",
      sinopse: "No verão de 1989, um grupo de crianças intimidadas se une para destruir um monstro que muda de forma, que se disfarça de palhaço e ataca os filhos de Derry, sua pequena cidade do Maine.",
      nota: 7.4,
      genero: "Terror" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Invocação do Mal",
      ano: 2013,
      direcao: "James Wan",
      sinopse: "Os investigadores paranormais Ed e Lorraine Warren trabalham para ajudar uma família aterrorizada por uma presença sombria em sua casa de fazenda.",
      nota: 7.5,
      genero: "Terror" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "O Exorcista",
      ano: 1973,
      direcao: "William Friedkin",
      sinopse: "Quando uma adolescente é possuída por uma entidade misteriosa, sua mãe procura a ajuda de dois padres para salvar sua filha.",
      nota: 8,
      genero: "Terror" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Olhos Famintos",
      ano: 2001,
      direcao: "Victor Save",
      sinopse: "Um irmão e uma irmã que dirigem para casa através de campos isolados para as férias de primavera encontram uma criatura carnívora que está no meio de seu ritual ritual.",
      nota: 6.2,
      genero: "Terror" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "O Chamado",
      ano: 2002,
      direcao: "Gore Verbinski",
      sinopse: "Um jornalista deve investigar uma fita de vídeo misteriosa que parece causar a morte de alguém uma semana após o dia em que a visualiza.",
      nota: 7.1,
      genero: "Terror"
    }
  )).then(() => Filme.create(
    { 
      titulo: "Pânico",
      ano: 1996,
      direcao: "Wes Craven",
      sinopse: "Um ano após o assassinato de sua mãe, uma adolescente é aterrorizada por um novo assassino, que atinge a garota e seus amigos usando filmes de terror como parte de um jogo mortal.",
      nota: 7.2,
      genero: "Terror" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "Hereditário",
      ano: 2018,
      direcao: "Ari Aster",
      sinopse: "Depois que a matriarca da família morre, uma família enlutada é assombrada por ocorrências trágicas e perturbadoras e começa a desvendar segredos sombrios.",
      nota: 7.3,
      genero: "Terror" 
    }
  )).then(() => Filme.create(
    { 
      titulo: "O Homem nas Trevas",
      ano: 2016,
      direcao: "Fede Alvarez",
      sinopse: "Na esperança de sair com uma enorme fortuna, um trio de ladrões invade a casa de um cego que não é tão impotente quanto parece.",
      nota: 7.1,
      genero: "Terror" 
    }
  ))
  .then(jane => {
    console.log(jane.toJSON());
  });
  Filme.associate = function (models) {   
  };
  return Filme;
};