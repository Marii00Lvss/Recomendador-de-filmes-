// Idade 18 anos:
// 1) As tranças do Careca, romance
// 2) Bastardos Inglórios, ação
// 3) Annabelle, terror

// Idade 12 anos:
// 1) As branquelas, ação
// 2) Coraline e o mundo secreto, terror
// 3) A barraca do beijo, romance

// Idade livre
// Enrolados, romance
// Orion e o Escuro, terror
// Carros, ação

 let compoIdade;
 let campoAcao;
 let compoTerror;
 let compoRomance;
 let filme;

function setup() {
  createCanvas(600, 400);
  createElement('h1' , 'Recomendador de Filmes');
  createSpan("Idade:");
campoIdade = createInput("1");
createElement('h4' , 'Escolha somente um gênero:')
campoAcao = createCheckbox('Ação');
campoTerror = createCheckbox('Terror');
campoRomance = createCheckbox('Romance'); 
}

function draw() {
  background('pink');
  textAlign(CENTER, CENTER);
  textSize(40);
  fill('purple')
  
  let idade = campoIdade.value();
  let acao = campoAcao.checked();
  let terror = campoTerror.checked();
  let romance = campoRomance.checked();
  
  filme = geraRecomendacao(idade, acao, terror, romance);
  
  text(filme, width/2, height/2);
}
function geraRecomendacao(idade, acao, terror, romance){
  if (idade >=18){
    if (acao){
      return 'Bastardos Inglórios'
    }else if (terror){
      return 'Annabelle';
    }else if (romance){
      return 'As tranças do Careca';
    }else{
      return 'Bastardos Inglórios';
    }
  }else if (idade >= 12){
    if(acao){
    return 'As Branquelas';
  }else if(terror){
    return 'Coraline e o mundo secreto';
  }else if(romance){
    return 'A barraca do beijo'; 
  }else{  
   return 'Carros';
  }
}else{
    if(acao){
    return 'Carros';
  }else if(terror){
    return 'Orion e o Escuro';
  }else if(romance){
    return 'Enrolados'; 
  }else{  
   return 'Carros';
}
}
}
