// Carga de elementos necesarios al entrar en la página.
time = 60;
function carga(){
    items = Array("piscina","croqueta","heliche","seguridad","informatica","colores","pantalla","enfermeria","construccion","carretera","tecnico","camion");
    item = items[Math.floor(Math.random()*items.length)];
    str= "*";
    repeticion = str.repeat(item.length);
    parrafo2.innerHTML = str.repeat(item.length);
    parrafo = str.repeat(item.length);
    intentos=Number(5);
    parrafo3.innerHTML=intentos;
    parrafoletras.innerHTML = "Letras usadas:"
    parraforeloj.innerHTML = time;
    setInterval(reloj,1000);
    function reloj(){
        //Reloj
        parraforeloj.innerHTML = time;
        if(time==0){
            window.location.reload();
            alert("Has perdido!");
        }else{
            time-=1;
        }
    }
    
}




function letras(letra){
    acierto=null
    win=null;
    parrafo2.innerHTML = '';
    //Detector de aciertos y fallos
    for(x=0;x<=item.length-1;x++){
            if(item[x]==letra){
                parrafo2.innerHTML=parrafo2.innerHTML + letra;
                acierto=true;
            }else{
                parrafo2.innerHTML=parrafo2.innerHTML + parrafo[x];
            }
            if(parrafo[x]=="*"){
                win=false;
            }
    }
    if (acierto==null){
        intentos--;
    }
    //Integración de resultados
    parrafoletras.innerHTML = parrafoletras.innerHTML + "<br>" + letra ; 
    parrafo=parrafo2.innerHTML; 
    parrafo3.innerHTML=intentos;
    //Alerta de win
    if (win==null){
        alert("Has ganado!");
        window.location.reload()
    }
    //Alerta de loss
    if (intentos<=Number(0)){
        alert("Has perdido!");
        window.location.reload()
    }
}

