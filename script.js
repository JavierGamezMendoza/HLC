function multiplica(num1, num2) {
    if(check(num1, num2)==false){
        foto.src = "fotos/multiplica.png" ;
        return num1 * num2;
    }
    
}
function divide(num1, num2) {
    if(num1 < "0" || num1 > "9" || num2 < "0" || num2 > "9"){
        alert("Cifras incorrectas");
    
    }else{
        foto.src = 'fotos/divide.png' ;
        return num1 / num2 ;
    }
    
}
function suma(num1, num2) {
    if(num1 < "0" || num1 > "9" || num2 < "0" || num2 > "9"){

        alert("Cifras incorrectas");
    
    }else{
        foto.src = 'fotos/suma.png' ;
        return Number(num1) + Number(num2) ;
    }
    
}
function resta(num1, num2) {
    if(num1 < "0" || num1 > "9" || num2 < "0" || num2 > "9"){

        alert("Cifras incorrectas");
    
    }else{
        foto.src = 'fotos/resta.png' ;
        return num1 - num2 ;
    }
    
    
}
function eleva(num1, num2) {
    if(num1 < "0" || num1 > "9" || num2 < "0" || num2 > "9"){

        alert("Cifras incorrectas");
    
    }else{
        foto.src = 'fotos/eleva.png' ;
        return Math.pow(num2, num1) ;
    }
    
    
}
function raiz(num1) {
    if(num1 < "0" || num1 > "9"){

        alert("Cifra incorrectas");
    
    }else{
        foto.src = 'fotos/raiz.png' ;
        return Math.sqrt(num1);
    }
    
    
}
function maximo(num1, num2) {
    if(num1 < "0" || num1 > "9" || num2 < "0" || num2 > "9"){

        alert("Cifras incorrectas");
    
    }else{
        foto.src = 'fotos/maximo.png' ;
        return Math.max(num1, num2);
    }
    
    
}
function minimo(num1, num2) {
    if(num1 < "0" || num1 > "9" || num2 < "0" || num2 > "9"){

        alert("Cifras incorrectas");
    
    }else{
        foto.src = 'fotos/maximo.png' ;
        return Math.min(num1, num2);
    }
    
    
}
function restaurar() {
    
    resultado.value = '' ;
    numero1.value = '' ;
    numero2.value = '' ;
    foto.src = 'fotos/calc01.png' ;
    

    
}

function check(num1,num2) {
    
    if(num1 < 0 || num1 > 9 || num2 < 0 || num2 > 9){

        return true;
    }else{
        alert("Cifras incorrectas");
        return false;
        
    } 
}





function evaluar(num1) {
    letra=num1;
    if(!isNaN(num1)){
        return "Esto es un número";

        // if(num1 >= 0 && num1 <= 10){
        //     if(num1 >= 0 && num1 <= 2){
        //         return "Muy Mal...";
        //     }else if(num1 >= 3 && num1 <= 4){
        //         return "Mal...";
        //     }else if(num1 == 5){
        //         return "Aprobado -";
        //     }else if(num1 == 6){
        //         return "Aprobado +" ;
        //     }else if(num1 >= 7 && num1 <= 8){
        //         return "Bien!";
        //     }else if(num1 >= 9 && num1 <= 10){
        //         return "¡Muy Bien!";
        //     }
        // }else{
        //     alert("Cifras incorrectas");
        //     return error;
        // } 
    }  
    
    else if(letra.toUpperCase()=='A' || letra.toUpperCase()=='E' || letra.toUpperCase()=='I' || letra.toUpperCase()=='O' || letra.toUpperCase()=='U'){
        return "Esto es una vocal";
    }else{
        return "Esto no es una vocal";
    }
}

function nombre(nombre1){
    if(nombre1=="Sergio"){
        return "Tio mas pesao";
    }else if(nombre1=="Javi"){
        return "";
    }else if(nombre1=="Robertito"){
        return "";
    }else if(nombre1=="Daniel"){
        return "";
    }else if(nombre1=="Lucía"){
        return "";
    }else if(nombre1=="Patricia"){
        return "";
    }else if(nombre1=="Oriol"){
        return "";
    }else if(nombre1=="Jesus"){
        return "";
    }else if(nombre1=="Antonio"){
        return "";
    }
}

numcuenta=0;
function cuenta(numcuenta, modificador){

    
        while(numcuenta < modificador){
            numcuenta++;
            cuentaatras.innerHTML = numcuenta;
        }    
}
setTimeout(cuenta(), 1000);

function frase(nombre){
    frasenombre.innerHTML=nombre;
    for(i=1;i<=10;i++){
        frasenombre.innerHTML = frasenombre.innerHTML + "COMO? no ";

    }
}

function valen(nombre){

}


