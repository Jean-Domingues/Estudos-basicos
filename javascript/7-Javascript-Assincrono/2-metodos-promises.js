//! metodos uteis para promises

/*
Promise.all = executa todas as promisses de um array, e retorna 
um array com todas as respostas, caso haja erro, retornará o erro da primeira que falhar

Promise.race = retorna a promise mais rápida de um array, tem as mesmas caracteristicas de 
promise.all

Promise.resolve = retorna a promise resolvida

Promise.reject = retorna a promise rejeitada (erro)
*/

//* EXEMPLO COM PROMISE ALL
function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.round(Math.random() * (max - min) + min);
}

function aguarde(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject("ERRO")
        }
        setTimeout(() => {
            resolve('MINHAS PROMISE: ' + msg)
        }, time);
    })
}

const promessas = [
    'valor literal',
    aguarde('1 frase', rand(1,3)),
    aguarde('2 frase', rand(1,3)),
    aguarde('3 frase', rand(1,3)),
    'valor literal'
]

//! irá resolver todas as minhas promises, e retornar em um array, caso haja erro, ela retornará o primeiro
const resultadoDasPromises = Promise.all(promessas).then(msg =>{
    console.log(msg)
}).catch(valor=>{
    console.log(valor)
})


/******************************************************** */

//! PROMISE RACE (executara o que retornar o valor primeiro, no caso, o valor literal só cairá no erro se ele for o que excutar primeiro
/*
Promise.race(promessas).then(msg=>{
    console.log(msg)
}).catch(valor=>{
    console.log(valor)
})
*/

/********************************************************* */

//Promise.resolve e promise.reject
function pegaDados(){
    const dadosBaixados = true;

    if(dadosBaixados){
        return Promise.resolve(aguarde('1 frase', 1000))
        //já retorna a promessa resolvida
        
        //return Promise.reject('Dados prontos')
    }
    return aguarde('Dados baixados', rand(1,3))
}

pegaDados().then(dados => console.log('DADOS CERTOS', dados))