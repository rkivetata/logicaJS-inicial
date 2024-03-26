alert(`Boas vindas ao jogo Número Secreto`);
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // a var recebe agora um valor aleatorio atribuido pelo Math.random, que foi multiplicado por dez para pegar apenas os numeros aleatorios que vem apos a virgula e com o auxilio do parseInt o numero aleatorio agora vai ser INTEIRO. utilizado o +1 para deixar ser utilizado numeros entre 0 e 10 (o Math.random so aceita normalmente ate <1 ou nesse caso seria <10)
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }  
    tentativas++;
            }
        }

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // foi criada uma var palavraTentativa e ela recebeu o valor da outra var tentativa. caso a var tentativas for MAIOR que 1 ela fica no plural, senao fica no singular
alert(`Ae! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);



