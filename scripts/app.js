

function showResultado(resultado){ 
    document.getElementById("textResultado").value = resultado;
    
}

function getSuma(){
    let numeroUnoEle = Number(document.getElementById("numberUno").value)
    let numeroDosEle = Number(document.getElementById("numberDos").value)
    showResultado(numeroUnoEle + numeroDosEle)
  
}

function getResta(){
    let numeroUnoEle = Number(document.getElementById("numberUno").value)
    let numeroDosEle = Number(document.getElementById("numberDos").value)
    showResultado(numeroUnoEle - numeroDosEle)
  
}

function getMul(){
    let numeroUnoEle = Number(document.getElementById("numberUno").value)
    let numeroDosEle = Number(document.getElementById("numberDos").value)
    showResultado(numeroUnoEle * numeroDosEle)
  
}

function getDiv(){
    let numeroUnoEle = Number(document.getElementById("numberUno").value)
    let numeroDosEle = Number(document.getElementById("numberDos").value)
    showResultado(numeroUnoEle / numeroDosEle)
  
}

function getPotencia(){
    let numeroUnoEle = Number(document.getElementById("numberUno").value)
    let numeroDosEle = Number(document.getElementById("numberDos").value)
    showResultado(Math.pow(numeroUnoEle,numeroDosEle))
}

function getRaiz(){
    let numeroUnoEle = Number(document.getElementById("numberUno").value)
    showResultado(Math.sqrt(numeroUnoEle))
}

function getAbs(){
    let numeroUnoEle = Number(document.getElementById("numberUno").value)
    showResultado(Math.abs(numeroUnoEle))
}

function getAletorio(){
    let minimo = Number(document.getElementById("numberUno").value)
    let maximo = Number(document.getElementById("numberDos").value)
    maximo = maximo + 1
    let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo) + minimo)
    showResultado(numeroAleatorio)
}

function getRound(){
    let resultado = document.getElementById("textResultado").value
    showResultado(Math.round(resultado))
}

function getFloor(){
    let resultado = document.getElementById("textResultado").value
    showResultado(Math.floor(resultado))
}


function getCelling(){
    let resultado = document.getElementById("textResultado").value
    showResultado(Math.ceil(resultado))
}




