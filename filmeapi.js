'use script'

async function pesquisarFilme(filme){

    const url = `https://imdb.iamidiotareyoutoo.com/search?q=${filme}`
    const response = await fetch(url)
    const data = await response.json()
    const dataDescricao = data.description
    const fotoEncontrada = []
    
    dataDescricao.forEach(function(item){
        fotoEncontrada.push(item['#IMG_POSTER'])
    })

    return fotoEncontrada

}

function criarImagem(link){
    const galeria = document.getElementById('catalogo')
    const novaImgagem = document.createElement('img')
    novaImgagem.src = link
    galeria.appendChild(novaImgagem)
}




async function carregarFotos(){

    const filme = document.getElementById('filme').value 
    const fotos = await pesquisarFilme(filme)
    const catalogo = document.getElementById('catalogo')

    catalogo.replaceChildren('')

    console.log(catalogo)
    fotos.forEach(criarImagem)
}

document.getElementById('pesquisar').addEventListener('click', carregarFotos)