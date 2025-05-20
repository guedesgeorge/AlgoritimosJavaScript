/* Declare uma variável usando var fora de um bloco de código 
(por exemplo, if) e outra dentro desse bloco. 
Tente acessar essas variáveis dentro do bloco e fora dele 
utilizando console.log e analise os resultados. 
Faça o mesmo processo utilizando 
let e compare com os resultados anteriores.
*/

var fora = 10 

if(true){
    var dentro = 5
    console.log(dentro)
    console.log(fora)
}

