// //Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
// ```
// Estas são as comidas favoritas de nomeDoUsuario
// - Comida1
// - Comida2
// - Comida3
// ```

const nome = prompt("Qual seu nome?")
const Comida1 = prompt("Qual sua comida favorita?")
const Comida2 = prompt("Segunda comida favorita?")
const Comida3 = prompt("Terceira comida favorita?")

console.log(`-Estas são as comidas favoritas de ${nome} \n-Comida 1 ${Comida1} \n-Comida 2 ${Comida2} \n-Comida 3 ${Comida3}`)