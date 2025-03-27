var canvas_tres = document.getElementById("lienzo-tres");
var canvas_cuatro = document.getElementById("lienzo-cuatro");
var canvas_cinco = document.getElementById("lienzo-cinco");

if(canvas_tres.getContext){
    console.log("Si se soporta la propiedad getContext");

    //OBTENIENDO EL CONTEXTO DEL OBJETO CANVAS
    var cxt_3 = canvas_tres.getContext("2d");

    cxt_3.fillStyle = "rgb(135, 12, 12)"; //CREAR UN OBJETO DE COLOR DE FONDO
    cxt_3.fillRect(10,10,55,50); //DIBUJAR EL OBJETO EN LA POSICIÓN X=10, Y=10, CON ANCHO DE 55px Y ALTO DE 50px

    cxt_3.fillStyle = "rgba(19, 19, 166, 0.41)"; //CREAR UN OBEJTO DE COLOR DE FONDO
    cxt_3.fillRect(30,30,55,50); //DIBUJAR EL OBJETO EN LA POSICIÓN X=10, Y=10, CON ANCHO DE 55px Y ALTO DE 50px

    cxt_3.fillStyle = "rgba(109, 214, 109, 0.5)"; //CREAR UN OBEJTO DE COLOR DE FONDO
    cxt_3.fillRect(50,50,55,50); //DIBUJAR EL OBJETO EN LA POSICIÓN X=10, Y=10, CON ANCHO DE 55px Y ALTO DE 50px

}else{
    console.log("No se soporta la propiedad getContext");
}

if(canvas_cuatro.getContext){
    console.log("Si se soporta la propiedad getContext");

    //OBTENIENDO EL CONTEXTO DEL OBJETO CANVAS
    var cxt_4 = canvas_cuatro.getContext("2d");

    cxt_4.beginPath() //INICIA UN TRAZADO
    cxt_4.moveTo(0,0); //COLOCA EL PUNTERO DEL LÁPIZ EN LA POSICIÓN 5,5
    cxt_4.lineTo(150,150); //TRAZA UNA LINEA HASTA LA POSICIÓN 125, 125
    cxt_4.strokeStyle = "#FFFFFF"; //SE ASIGNA UN COLOR AL TRAZO
    cxt_4.stroke(); //SE IMPRIME EN EL LIENZO

}else{
    console.log("No se soporta la propiedad getContext");
}

if(canvas_cinco.getContext){
    console.log("Si se soporta la propiedad getContext");

    //OBTENIENDO EL CONTEXTO DEL OBJETO CANVAS
    var cxt_5 = canvas_cinco.getContext("2d");

    cxt_5.beginPath(); //INICIA UN TRAZADO
    cxt_5.setLineDash([5,15]); //ESTABLECER UNA LINEA PUNTEADA CON 15 PIXELES DIBUJADOS Y 5 PIXELES SIN DIBUJAR
    cxt_5.moveTo(0,40); //COLOCA EL PUNTERO DEL LÁPIZ EN LA POSICIÓN 0,40
    cxt_5.lineTo(150,40); //TRAZA UNA LINEA HASTA LA POSICIÓN 150, 40
    cxt_5.strokeStyle = "#FFFFFF"; //SE ASIGNA UN COLOR AL TRAZO
    cxt_5.stroke(); //SE IMPRIME EN EL LIENZO

    cxt_5.beginPath(); //INICIA UN TRAZADO
    cxt_5.setLineDash([]); //ESTABLECER UNA LINEA CONTÍNUA
    cxt_5.moveTo(0,120); //COLOCA EL PUNTERO DEL LÁPIZ EN LA POSICIÓN 0,40
    cxt_5.lineTo(150,120); //TRAZA UNA LINEA HASTA LA POSICIÓN 150, 40
    cxt_5.strokeStyle = "#FFFFFF"; //SE ASIGNA UN COLOR AL TRAZO
    cxt_5.stroke(); //SE IMPRIME EN EL LIENZO

}else{
    console.log("No se soporta la propiedad getContext");
}


