function calificacion (){
    let parcial1=parseFloat(document.getElementById('parcial1').value);
    let parcial2=parseFloat(document.getElementById('parcial2').value);
    let parcial3=parseFloat(document.getElementById('parcial3').value);
    let examenFinal=parseFloat(document.getElementById('examenFinal').value);
    let trabajoFinal=parseFloat(document.getElementById('trabajoFinal').value);
    let parcial =(parcial1+parcial2+parcial3)/3;
    let promedio=(parcial*0.55)+(examenFinal*0.3)+(trabajoFinal*0.15);
    let decimal = promedio.toFixed(2);
    document.getElementById("nota").innerHTML=decimal;
    return decimal;
}