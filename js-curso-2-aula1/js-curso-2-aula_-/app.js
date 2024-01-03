//Duas formas de como pegar o valor do HTML: com parâmetros e sem.

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';
let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){      // função que trabalha com parâmetro e exibe algo na tela.
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){      //exibe todas as mensagens iniciais.
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute(){     //função que trabalha sem parâmetro e sem retorno. '.value' acrescenta valor ao input.
    let chute = document.querySelector('input').value; 
   
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';  //operador ternário. funciona como o IF ELSE.
        let mensagemTentativas = `Você doscobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); // buscamos o nome do botão pelo id='reiniciar' e para fazer o botão responder a informação que foi passada, utilizamos o removeAttribute para tirar o 'disabled'.
   
    }else if(chute > numeroSecreto){
        exibirTextoNaTela('p', 'O número é menor');
    
    }else{
        exibirTextoNaTela('p', 'Número secreto é maior');
    }
    tentativas++ //caso não entre no if, será preciso contar o número de tentantivas++.
    limparCampo();
}

function gerarNumeroAleatorio(){  // função que trabalha com retorno (tiramos o 'return' e criamos um array). O método 'includes' verifica se o elemnto está na lista, se estiver, é verdadeiro.
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;// O 'length' é usado para obter a quantidadeDeElementosNaLista.

    if ( quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumeroSorteados = [];
    }

    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumeroSorteados.push(numeroEscolhido);// para adicionar alguma coisa na lista nós utilizanos o método 'push'.
        return numeroEscolhido;
    }
}

function limparCampo(){//a cada tentativa, o campo é limpo pela função. Não foi atribuido o valor ao 'input', porque não queremos pegar o valor dele propriamente dito, e sim, o campo em sí.
    chute = document.querySelector('input');
    chute.value = '';
}

function reinicarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)      //
}




//Uma array no JavaScript é uma estrutura de dados que permite armazenar e organizar vários valores em uma única variável. Os valores em uma array podem ser de qualquer tipo de dado, como números, strings, objetos, outras arrays e assim por diante. As arrays em JavaScript são indexadas, o que significa que cada valor dentro dela é associado a um índice numérico, começando geralmente do índice 0.

//Para remover o último elemento, você pode usar o método pop.

//Para adicionar um elemento ao final da array, você pode usar o método push.