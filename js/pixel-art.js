/*-----------DECLARACION DE VARIABLES-----------*/

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
],
$paleta = $("#paleta"),
$grillaPixeles = $("#grilla-pixeles"),
$indicadorColor = $("#indicador-de-color"),
$colorPaleta = $(".color-paleta"),
$borrar = $("#borrar"),
$batman = $("#batman"),
$wonder = $("#wonder"),
$flash =  $("#flash"),
$invisible = $("#invisible"),
$guardar = $("#guardar"),
$botonMenu = $(".boton-menu"),
$iconoMenu = $("#iconoMenu"),
$menu = $("#menu"),
$menuI = $("#menu label"),
$labelCuentagotas = $("#cuentagotas"),
$labelBote = $("#bote"),
$labelLapiz = $("#lapiz"),
$labelCirculo = $("#circulo"),
$pixel = $(".pixel"),
$colorPersonalizado = $('#color-personalizado'), // Variable para guardar el elemento 'color-personalizado' Es decir, el que se elige con la rueda de color.
inputLapiz = document.getElementById("input-lapiz"),
inputBote = document.getElementById("input-bote"),
inputCuentagotas = document.getElementById("input-cuentagotas"),
inputCirculo = document.getElementById("input-circulo"),
index="";//DETECTA CUANDO EL MOUSE ESTA APRETADO O NO



/*-----------DECLARACION DE FUNCIONES-----------*/


function creaPaletaColores(array){
  for(x in array){
    var $color = $("<div class='color-paleta'></div>");
    $color.css("background-color", array[x]);
    $paleta.append($color);
  }
}

function creaGrillaPixeles(){
  for(x=0; x<1749; x++){
    var $pixel = $("<div class='pixel'></div>");
    $grillaPixeles.append($pixel);
  }
}

function cambiaIndicadorColor(valor){
  $indicadorColor.css("background-color", valor);
}

function borrar(){
  $(".pixel").animate({"background-color":"#fff"},1000);
}

function cargarImagen(elemento, superheroe){
  elemento.click(function(){cargarSuperheroe(superheroe)})
}

function chequearInput(label1, label2, label3, input1, input2, input3, puntero){
  $(label1).click(function(){
      if ($(label1).css("color")!="green");
      $(label1).css({"color":"green"});
      $grillaPixeles.css({"cursor": puntero});
      input1.checked=true;
      $(label2).css({"color":"black"});
      input2.checked=false;
      $(label3).css({"color":"black"});
      input3.checked=false;
  });
}


/*--------------EJECUCION DE FUNCIONES Y EVENTOS----------------*/ 


creaPaletaColores(nombreColores);
creaGrillaPixeles();
chequearInput("#cuentagotas", "#bote", "#lapiz", inputCuentagotas, inputBote, inputLapiz, "url('./img/cursor-cuentagotas.png'), auto");
chequearInput("#bote", "#lapiz", "#cuentagotas", inputBote, inputCuentagotas, inputLapiz, "url('./img/cursor-pintura.png'), auto");
chequearInput("#lapiz", "#bote", "#cuentagotas", inputLapiz, inputBote, inputCuentagotas, "url('./img/cursor-lapiz.png'), auto");

$("#circulo").click(function(){  //PONE LA GRILLA EN FORMATO CIRCULO
    $("#circulo").css({"color":"green"});
    $("#cuadrado").css({"color":"black"});
    $(".pixel").css({"border-radius":"50%"});
})

$("#cuadrado").click(function(){  //PONE LA GRILLA EN FORMATO CUADRADO
    $("#cuadrado").css({"color":"green"});
    $("#circulo").css({"color":"black"});
    $(".pixel").css({"border-radius":"0%"});
})

$($colorPersonalizado).on('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    var $colorActual = $colorPersonalizado.val();
     cambiaIndicadorColor($colorActual);
  })
);

  
//-----FUNCIONES PRINCIPALES DE LAS HERRAMIENTAS DEL JUEGO----


$(document).on("click", ".color-paleta", function(){//SELECCIONA EL COLOR
  var $colorElegido = $(this).css("background-color");
  cambiaIndicadorColor($colorElegido);  
}).on("click", ".pixel", function(){
  if(inputLapiz.checked==true){ //PINTA AL HACER CLICK 
    $(this).css("background-color", $indicadorColor.css("background-color"));
  } 
  else if (inputBote.checked==true){ //PINTA TODO EL LIENZO AL HACER CLICK
    $(".pixel").css("background-color", $indicadorColor.css("background-color"));
  } 
  else if(inputCuentagotas.checked==true){
    $(document).on("click", ".pixel", function(){//SELECCIONA EL COLOR
      var $colorElegido = $(this).css("background-color");
      cambiaIndicadorColor($colorElegido);
    });
  }
}).on("mousedown", ".pixel", function(){//DETECTA QUE EL MOUSE MANTENGA EL CLICK
      index=1;
}).on("mouseup", ".pixel", function(){//DETECTA SI SE SOLTO EL CLICK DEL MOUSE
    index=0;
}).on("mousemove", ".pixel", function(){ //CAPTURA EL MOVIMIENTO DEL MOUSE
  if(inputLapiz.checked==true){
    if(index==1){
      $(this).css("background-color", $indicadorColor.css("background-color"));
    }
  }
}).on("dragleave",".pixel",function(){ //EVITA QUE SIGA PINTANDO LUEGO DE UN DRAG
  index=0;
});

$grillaPixeles.mouseleave(function(){//DETECTA SI EL CURSOR SALIO DE LA GRILLA
  index=0; 
});

$botonMenu.click(function(){ //ABRE Y CIERRA EL MENU DE HERRAMIENTAS
  if ($menu.css('height')== "0px"){
    $menu.animate({height: "270px",}, 2500, 'easeOutElastic');
    $menuI.css({"display":"block"});
    $iconoMenu.attr("class","fas fa-times");
  }
  else{
    $menu.animate({height: "0px",}, 400);
    $menuI.slideUp(600);
    $iconoMenu.attr("class","fas fa-bars");
  }
});

//-----FUNCIONES RELATIVAS AL BORRADO, CARGADO  GUARDADO DE IMAGENES----

$borrar.click(function(){//BORRA EL LIENZO
  if (confirm("¿Estas seguro/a?. Si presionas Aceptar, el dibujo se perdera para siempre")){
    borrar()
  } 
});

cargarImagen($batman,batman);//CARGA A BATMAN
cargarImagen($wonder,wonder);//CARGA A WONDER
cargarImagen($flash,flash);  //CARGA A FLASH
cargarImagen($invisible,invisible);//CARGA A INVISIBLE
$guardar.click(function(){ //GUARDA LA IMAGEN
  guardarPixelArt()
});

   







