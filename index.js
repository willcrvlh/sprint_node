import sync from 'prompt-sync';
const manda = sync()
const comando = (propriedade) => {
    let array = [];
    while(propriedade != "sair") {
        array.push(propriedade);
        propriedade = manda("digite uma propriedade do css ")
    }
    console.log(array.sort().join());
}
comando();