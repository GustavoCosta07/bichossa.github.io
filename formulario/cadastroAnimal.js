const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

if (!usuarioLogado) {
    window.location.assign('../index.html')
}

function cadastrarAnimal() {
    const especie = document.getElementById('animal').value
    const nomeAnimal = document.getElementById('NomeAnimal').value
    const idadeAnimal = document.getElementById('Idade').value
    const descricaoAnimal = document.getElementById('Resumo').value
    // const descricaoCompletaAnimal = document.getElementById('descricaoCompleta').value
    // const localizacaoAnimal = document.getElementById('localizacao').value
    
    
    if (!especie || !nomeAnimal || !idadeAnimal || !descricaoAnimal){//|| !descricaoCompletaAnimal || !localizacaoAnimal) {
        alert("Insira os valores nos campos corretamente!")
        return false;
    }

    let listaAnimal = JSON.parse(localStorage.getItem('listaAnimal') || '[]')

    const id = listaAnimal.length + 1

    listaAnimal.push(
        {
            id: id,
            nomeAnimalCad: nomeAnimal,
            especieCad: especie,
            idadeCad: idadeAnimal,
            descricaoCad: descricaoAnimal,
            idDono: usuarioLogado.id,
            // descricaoCompletaAnimalCad: descricaoCompletaAnimal,
            // localizacaoAnimalCad: localizacaoAnimal,

        }
    )

    localStorage.setItem('listaAnimal', JSON.stringify(listaAnimal))
    window.location.assign('/home/home.html')
    return false
}


