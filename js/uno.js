//Llamo a los elementos HTML para usarlos y darles sus diferentes funciones o aplicarle textos
var boton=document.getElementById("unaMas")
var plantarse=document.getElementById("plantarse") 
var mostrarPuntaje=document.getElementById("puntaje")
var plantado=document.getElementById("plantado")
var reiniciarB=document.getElementById("reiniciar")
//Creo los valores tanto de las cartas como el valor predeterminado para la victoria
const valores=[1,2,3,4,5,6,7,8,9,10,11,12]
const victoria=21
//Creo las variables de los puntajes tanto del user como del "Crupier"(puntajeC)
var puntaje=0
var puntajeC=0
//Creo 2 banderas para cambiar de estados los botones
var flagU=false
var flagC=false

//Usuario pide una carta mas y el programa se fija si gano o no
boton.addEventListener("click",()=>{
    if(flagU==false){
        unaMas()
        condicionVictoria()
    }
    else{
        console.log("Fui desactivado");
    }
    
})

//Usuario se queda con el puntaje obtenido hasta el momento y se desactiva el boton de "Una mas"
plantarse.addEventListener("click",()=>{

    if(flagC==false){
        flagU=true
        puntajeCrupier()
    }
    else{
        console.log("Yo tambien fui desactivado");
    }
   
    
})

//Funcion creada para pedir una carta mas y sumar puntaje
function unaMas(){
    var numeroAleatorio=Math.floor(Math.random()*valores.length+1)
    console.log(numeroAleatorio);
    puntaje=puntaje+numeroAleatorio
}

//Funcion que se fija si el usuario puede seguir jugando o ya perdio
function condicionVictoria(){
    if(puntaje>victoria){
        console.log("Has perdido tu puntaje es "+puntaje)
        mostrarPuntaje.innerHTML="<p>Has perdido tu puntaje es "+puntaje+"</p>"
        flagU=true
        flagC=true
    }
    else if(puntaje<victoria){
        console.log("Vas Bien! llevas: "+puntaje)
        mostrarPuntaje.innerHTML="<p>Vas Bien! llevas: "+puntaje+"</p>"
    }
    else if(puntaje==victoria){
        console.log("GANASTE CON 21 PERFECTO!")
        mostrarPuntaje.innerHTML="<p>GANASTE CON 21 PERFECTO!</p>"
        flagU=true
        flagC=true
    }
}

//Cuando el usuario se planta es el turno del crupier para ver si logra estar mas cerca de 21 o si pierde
function puntajeCrupier(){
    
        var numeroAleatorioC=Math.floor(Math.random()*valores.length+1)
        puntajeC=puntajeC+numeroAleatorioC
        console.log("El puntaje del crupier es:"+puntajeC)
        if(puntajeC==victoria){
            console.log("El crupier gana con 21 perfecto!");
            plantado.innerHTML="<p>El crupier gana con 21 perfecto!</p>"
            flagC=true
        }
        else if(puntajeC<puntaje||puntajeC==puntaje){
            puntajeCrupier()
            plantado.innerText="El crupier tiene: "+puntajeC
        }
        else if(puntajeC>victoria){
            console.log("El crupier pierde");
            plantado.innerText="Crupier se pasa! Tiene: "+puntajeC
            flagC=true
        }
        else if(puntajeC>puntaje&&puntajeC<victoria){
            console.log("El crupier gana, se acerco mas al 21 con: "+puntajeC);
            plantado.innerText="El crupier gana, se acerco mas al 21 con: "+puntajeC
            flagC=true
        }
        else{
            console.log("Error, por alguna razon entre aca");
        }


}

reiniciarB.addEventListener("click",()=>{
    reiniciar()
})

function reiniciar(){
    mostrarPuntaje.innerHTML=""
    plantado.innerHTML=""
    flagC=false
    flagU=false
    puntaje=0
    puntajeC=0
    console.log("Aca se reinicio el juego y los valores igual");
}
