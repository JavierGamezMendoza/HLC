function carga(){
    var items = Array("piscina","croqueta","heliche","seguridad");
    var item = items[Math.floor(Math.random()*items.length)];
    var str= "*";
    cifrado= items[item];
    parrafo2.innerHTML= str.repeat(cifrado.length);
    alert("cifrado");
}

document.onload = carga;



function letras(palabra, letras){
   
    // for(x=0;x<=palabra.length-1;x++){
    //         if(palabra[x]==letras){
    //             parrafo2.innerHTML = parrafo2.innerHTML + palabra[x];
    //         }else{
    //             parrafo2.innerHTML = parrafo2.innerHTML + "*";
    //         }
    //     resultado = parrafo2.innerHTML;
    // }
 }


