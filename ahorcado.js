// Esta función carga una palabra aleatoria al entrar en la página.

function carga(){
    items = Array("piscina","croqueta","heliche","seguridad");
    item = items[Math.floor(Math.random()*items.length)];
    str= "*";
    repeticion = str.repeat(item.length);
    parrafo2.innerHTML = str.repeat(item.length);
    parrafo = parrafo2.innerHTML;
}



function letras(letra){
    for(x=0;x<=item.length-1;x++){
            if(item[x]==letra){
                    parrafo[x] = letra;
                    alert(parrafo[x]);
            
            }else{

            }

            
    }
// parrafo2.innerHTML="";
//     for(x=0;x<=item.length-1;x++){
//         if(item[x]==letra){
//             parrafo = parrafo + letra;
//         }else if(parrafo[x]=="*"){
//             parrafo = parrafo + "*";
//         }else{
//             parrafo = parrafo + parrafo[x];
//         }

//     }
//     parrafo2.innerHTML = parrafo;
}



