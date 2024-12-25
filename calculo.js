import calculo from 'readline-sync';
let valor = calculo.question("Digite o valor R$:");
let dia_atraso = calculo.question("Digite a quantidade de dias de atraso:");
let multa1 = 5;
let multa2 = 10;


if(dia_atraso == 0){
    console.log("O valor a ser pago é de R$:", +valor+",00");
    console.log("Não há multa a ser paga.");
}else if(dia_atraso <= 15){
    let valor_juros = (valor / 100) * multa1;
    let valor_atualizado = Number(valor) + Number (valor_juros);
    console.log("O valor a ser pago é de R$:", +valor_atualizado.toFixed(2));
    console.log("Valor da Multa é de 5% :"+valor_juros.toFixed(2));
}else{
    let valor_juros = (valor / 100) * multa2;
    let valor_atualizado = Number(valor) + Number (valor_juros);
    console.log("O valor a ser pago é de R$:", +valor_atualizado.toFixed(2));
    console.log("Valor da Multa é de 10% : "+valor_juros.toFixed(2));
}
