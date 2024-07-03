var id = 0;
function TextTrade (arrow) {
    // arrow 1 esq || arrow 2 direita
    let p = document.getElementById("p")
    let frases = ["Todos as musicas" , "Para todas as musicas" , "Musicas para todos"]
    console.log("entrou na funcao")
    if(arrow == 1){
       console.log("entrou no if")
        if(id > 2){
            id = 0;
        }
        console.log(id)
        p.innerHTML = frases[id]
        id++
    }

    if(arrow == 2) {

        
        if(id < 0){
            id=2;
        }
        console.log(id)
        p.innerHTML = frases[id]
        id--
    }
}

var idd;

function hamb(clique) {

    console.log("entrou na task")
    const elemento = document.querySelector('.containter-hamburguer');
    if (idd == 3 ){
       console.log("saiu do clique")

       elemento.classList.remove('abrir');
       idd = 1
   }
   else if(clique = 1){
       console.log("entrou no clique")
       elemento.classList.add('abrir');
       idd = 3
    }
    document.onkeydown = function(e) {
        if(e.key === 'Escape') {
            console.log("APERTOU ESC!")
            elemento.classList.remove('abrir');
        }
    }

   
}
