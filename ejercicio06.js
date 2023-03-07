function calificacion (){
    let a=parseFloat(document.getElementById('a').value);
    let b=parseFloat(document.getElementById('b').value);
    let c=parseFloat(document.getElementById('c').value);
    let promedio=(a*0.55)+(b*0.3)+(c*0.15);
    let decimal = promedio.toFixed(2);
    document.getElementById("nota").innerHTML=decimal;
    return decimal;
}