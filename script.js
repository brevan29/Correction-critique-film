function AfficherErr(){
    document.getElementById('lexiqueErreurs').style.visibility="visible"
    let achanger = document.getElementsByClassName('NON')
    let amodifier = document.getElementsByClassName('presque')
    let aapprof = document.getElementsByClassName('proposition')
    for (i=0; i<aapprof.length; i++){
            achanger[i].style.color = "rgb(192, 0, 0)"
            amodifier[i].style.color = "orange"
            aapprof[i].style.color = "green"
        }
        achanger[2].style.color = "rgb(192, 0, 0)"
        amodifier[2].style.color = "orange"
        achanger[3].style.color = "rgb(192, 0, 0)"
        amodifier[3].style.color = "orange"
        achanger[4].style.color = "rgb(192, 0, 0)"
        amodifier[4].style.color = "orange"
        amodifier[5].style.color = "orange"
}

function AfficherCorr(){
    if (document.getElementById('lexiqueErreurs').style.visibility==="visible"){
        document.getElementById('Correction').style.visibility="visible"
    }
}

function CorrigerEric(){
    document.getElementById("Eric").innerHTML = "La bonne réponse est : 'un film d'Eric Rhomer'"}

function CorrigerEtait(){
    document.getElementById("Etait").innerHTML = "La bonne réponse est : 'est'"}

function CorrigerPeu(){document.getElementById("Peu").innerHTML = "La bonne réponse est : 'peu'"}