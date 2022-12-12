# Practica-01-Curso-RN
Practica correspondiente al uso de Flex Box al generar diferentes pantallas con diferentes distribuciones en cajas. 

<h2> Pantallas </h2>




<style type="text/css">
#contenedor_principal{
width:1024px;
height:auto;
position:relative;
margin:auto;
}
.contenedor_imagen_texto{
width:335px;
height:auto;
position:relative;
display:inline-block;
vertical-align:top;
overflow:hidden;
}
.imagen, .texto{
width:100%;
height:auto;
position:relative;
display:inline;
}
.texto{
height:auto;
text-align:center
}
</style>

<div id="contenedor_principal">
<!--Primera Imagen-->
<div class="contenedor_imagen_texto">
<div class="imagen"><img src="https://i.postimg.cc/yW4zjKgh/dos.jpg" width="180" height="400"/></div>
<div class="texto">Texto debajo de la imagen</div>
</div>

<!--Segunda Imagen-->
<div class="contenedor_imagen_texto">
<div class="imagen"><img src="https://i.postimg.cc/yW4zjKgh/dos.jpg" width="180" height="400"/></div>
<div class="texto">Texto debajo de la imagen</div>
</div>

<!--tercera Imagen-->
<div class="contenedor_imagen_texto">
<div class="imagen"><img src="https://i.postimg.cc/yW4zjKgh/dos.jpg" width="180" height="400"/></div>
<div class="texto">Texto debajo de la imagen</div>
</div>
</div>

