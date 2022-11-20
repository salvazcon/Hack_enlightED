

let inputWords;
let poema;
let poemaFinal;
let esPoema;
let vocabulario01 = ["el amor","el odio","el pepe","el portaavion","el pensamiento","la religión","un script","42","el dolor","el pepe"];
let vocabulario02 = ["el coraje","el maquinista","el tren","la soberbia", "los tíos"];
let vocabulario03 = ["un perro","un gorila","un pepe","un chorizo", "una langosta", "un camión"];
let vocabulario04 = ["Francia", "mi casa", "una mandarina" , "una piña" , "un cacahuete", "Móstoles", "Italia", "el baño"];


function getDatosVogon(){

    var nombre = document.getElementById("firstname").value;
    var ciudad = document.getElementById("ciudad").value;
    var objeto = document.getElementById("objeto").value;
    
    if(!nombre || !ciudad || !objeto)
    {
        poema = "No vayas de listo,<br> ESCRIBE ALGO!!!!!!!";
        document.getElementById("poema").innerHTML = poema;
        return (0);
    }
    var random01 = Math.floor(Math.random() * vocabulario01.length);
    var random02 = Math.floor(Math.random() * vocabulario02.length);
    var random03 = Math.floor(Math.random() * vocabulario03.length);
    var random04 = Math.floor(Math.random() * vocabulario04.length);

    poema = "¿Qué es " + vocabulario01[random01] +  "? si no es lo que siento por ti, " 
    + nombre + "ato<br>¿Qué es " + vocabulario02[random02] + "? si no es lo que siento cuando estás lejos de " 
    + ciudad + "ano<br>¿Quién soy yo sin " + objeto + "amo?<br>Cuando " + vocabulario03[random03] + "se va algo se muere en " + vocabulario04[random04];
    let i = 0;
    let j = 0;
    document.getElementById("poema").innerHTML = poema;
    console.log(poema);
}

function getDatosSpain()
{
    var nombre = document.getElementById("firstname").value;
    var ciudad = document.getElementById("ciudad").value;
    var objeto = document.getElementById("objeto").value;
    
    if(!nombre || !ciudad || !objeto)
    {
        poema = "No vayas de listo,<br> ESCRIBE ALGO!!!!!!!";
        document.getElementById("poema").innerHTML = poema;
        return (0);
    }
    var random01 = Math.floor(Math.random() * vocabulario01.length);
    var random02 = Math.floor(Math.random() * vocabulario02.length);
    var random03 = Math.floor(Math.random() * vocabulario03.length);
    var random04 = Math.floor(Math.random() * vocabulario04.length);

    poema = "¿Qué es " + vocabulario01[random01] +  "? si no es lo que siento por ti, " 
    + nombre + "<br>¿Qué es " + vocabulario02[random02] + "? si no es lo que siento cuando estás lejos de " 
    + ciudad + "<br>¿Quién soy yo sin " + objeto + "?<br>Cuando " + vocabulario03[random03] + "se va algo se muere en " + vocabulario04[random04];
    document.getElementById("poema").innerHTML = poema;

}

function readXml()
{
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xml,'text/xml');

    var poesia = xmlDoc.getElementsByTagName("poesia")[0].innerHTML;

}