var nota1 = parseInt(prompt("qual sua primeira nota? "));
var nota2 = parseInt(prompt("qual sua segunda nota"));

var media = (nota1 + nota2) / 2;

var conceito = ""

if (media > 9) {

    conceito = "parabens voce é um genil";
}

else if ( media >= 6){

    conceito = "otimo voce passou";
}

else  {

    conceito = "infelizmente voce perdeu";

}

alert("Sua media foi " + media)
alert(conceito)

switch (conceito){
        case "parabens voce é um genil" : alert("tudo de bom sempre")
        break
        case "otimo voce passou": alert("voce vai chegar la")
        break
        case "infelizmente voce perdeu": alert(" tente outra vez depois")
        break
        default : alert(" houve um erro")

}