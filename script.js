const primerMensaje = document.querySelector(".textoEncriptado");
const mensaje = document.querySelector(".textoDesencriptado");

function btnEncriptar(){
    const textoEncriptado = encriptar(primerMensaje.value);
    mensaje.value = textoEncriptado;
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i< matrizCodigo.length; i++){
        
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        
        }
    
    }
    return stringEncriptada;
}


function btnDesencriptar(){
    let textoEncriptado = desencriptar(primerMensaje.value);
    mensaje.value = textoEncriptado;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i< matrizCodigo.length; i++){
        
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        
        }
    
    }
    return stringDesencriptada;
}

function copy() {
    let copyText = document.querySelector(".textoDesencriptado");
    copyText.select();
    document.execCommand("copy");
}
