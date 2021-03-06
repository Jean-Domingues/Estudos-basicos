//PARA PARAR UM INTERVALO DIGITE F9(vs code)

'SET INTERVAL'
//Seta um intervalo de tempo para uma função ser executada de tempos em tempos
//SINTAXE 
/*
setInterval(nomeDaFunção(), timerEmMileSegundos);
setInterval(function(){ ..... }, timerEmMileSegundos);
const timer = setInterval(function(){ ..... }, timerEmMileSegundos); //utilizada em conjunto com setTimeout
*/
const timer = setInterval(function(){
    console.log("oi")  //irá printar oi, a cada um segundo
}, 1000)

// ************************************************

'SET TIME OUT'
//sintaxe
/*
setTimeout(funçãoNomeada(), tempoParaComeçarExecutar);
setTimeout(function (){ ... }, tempoParaComeçarExecutar);
*/

//setTimeout (seta um tempo, para que a função possa ser executada pela primeira vez)
setTimeout(function (){ clearInterval(timer)}, 3000);
//depois de 10 segundos a função timer será pausada

'Assim como em setInterval() você pode atribuir uma variável para armazernar o id do timer'

const meuNovoTimer = setTimeout(()=> {
  console.log('Passou 10 segundos');
}, 5000);

'com o id retornado eu posso usar o clearInterval() para cancelar a execução'

clearInterval(meuNovoTimer); // A função não vai executar 

// ZERO DELAY

/**
 * Definindo o tempo de execução de setTimeOut para zero, a função ira executar
 * o mais rápido possível, porém, após a execução da função atual
 */

setTimeout(() => {
  console.log('after ')
}, 0)

console.log(' before ') // Saída: before after