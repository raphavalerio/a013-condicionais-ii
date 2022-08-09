const num = Number(prompt("Digite um número:")) //seu numero aqui


// 1
if(num % 2 === 0){
    if(num % 3 === 0){
        console.log(`O número ${num} é divisível por 2 e 3.`)
    } else{
        console.log(`Digite um novo número.`)
    }
}

// 2 

if(num % 2 === 0 && num % 3 === 0){
    console.log(`O número ${num} é divisível por 2 e 3.`)
} else{
    console.log(`O número ${num} não é divisível por 2 e 3.`)
}