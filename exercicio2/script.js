let nacionalidade = Number(prompt("Escolha a sua nacionalidade:\n1-Brasileira\n2-Argentina\n3-Uruguaia\n4-Chilena\n5-Colombiana").toLowerCase());

switch(nacionalidade){
    case 1:
        console.log("A pessoa é do Brasil!")
        brake;
    case 2:
        console.log("A pessoa é da Argentina!")
        brake;
    case 3:
        console.log("A pessoa é Uruguaia!")
        brake;
    case 4:
        console.log("A pessoa é Chilena!")
        brake;
    case 5:
        console.log("A pessoa é Colombiana!")
        brake;
    default:
        console.log("Nacionalidade não encontrada.")
};






// if(nacionalidade === "brasileira"){
//     console.log("a pessoa é do Brasil!");
// } else if(nacionalidade === "argentina"){
//     console.log("a pessoa é da Argentina!");
// } else if(nacionalidade === "uruguaia"){
//     console.log("a pessoa é do Uruguai!");
// } else if(nacionalidade === "chilena"){
//     console.log("a pessoa é do Chile!");
// } else if(nacionalidade === "colombiana"){
//     console.log("a pessoa é da Colômbia!");
// } else{
//     console.log("nacionalidade não encontrada")
// }