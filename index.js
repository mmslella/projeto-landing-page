
var SetaDireita = window.document.getElementById("setadireita")
var ComentarioUm = window.document.getElementById("comentarioum")
var ComentarioDois = window.document.getElementById("comentariodois")
var ComentarioTres = window.document.getElementById("comentariotres")
var SetaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita(){
    ComentarioUm.style = "display:none"
    ComentarioTres.style = "display:flex"
    SetaDireita = "display:none"    
    SetaEsquerda = "display:flex"
}
function RolarParaEsquerda() { 

    ComentarioUm.style = "display:flex"
    ComentarioTres.style = "display:none"
    SetaDireita = "display:flex "    
    SetaEsquerda = "display:none"  


}