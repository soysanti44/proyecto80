var nombre_del_invitado = [];
function enviar(){
    var nombre1 = document.getElementById("uno").value;
     var nombre2 = document.getElementById("dos").value;
     var nombre3 = document.getElementById("tres").value;
     var nombre4 = document.getElementById("cuatro").value;
     var nombre5 = document.getElementById("sinco").value;
     var nombre5 = document.getElementById("seis").value;

     nombre_del_invitado.push(nombre1);
     nombre_del_invitado.push(nombre2);
     nombre_del_invitado.push(nombre3);
     nombre_del_invitado.push(nombre4);
     nombre_del_invitado.push(nombre5);
     nombre_del_invitado.push(nombre6);

    document.getElementById("ver_nombre").innerHTML= nombre_del_invitado;
    document.getElementById("enviar").style.display="none";
    document.getElementById("ordenar").style.display="inline-block";
}
function ordenar(){
    nombre_del_invitado.sort();
    document.getElementById("ver_nombre").innerHTML= nombre_del_invitado;
}