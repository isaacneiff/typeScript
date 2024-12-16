function analisarLote() {
   
    const pacotes: number[] = Array.from({ length: 100 }, () => Math.random() * 200 + 400);

    const maior = Math.max(...pacotes);
    const menor = Math.min(...pacotes);
    const acima500 = pacotes.filter(peso => peso > 500).length;
    const abaixo500 = pacotes.filter(peso => peso < 500).length;
    const variacao = maior - menor;

    const mensagem = variacao > 100 ? "lote com alta divergência" : "lote padrão";

    console.log(`Maior peso: ${maior}`);
    console.log(`Menor peso: ${menor}`);
    console.log(`Pacotes acima de 500g: ${acima500}`);
    console.log(`Pacotes abaixo de 500g: ${abaixo500}`);
    console.log(`Variação: ${variacao}`);
    console.log(mensagem);
}

analisarLote();