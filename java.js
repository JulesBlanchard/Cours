/*




*/

let bouton = document.getElementById("bouton"); 
bouton.style.fontSize = "25px"; 
bouton.style.color = "#C500FF"; 
var mode = "caché";
function myFunction(){
  if(mode =="caché"){
    document.getElementById("bouton").innerHTML="Spoiler Alert !!!";
    mode="ouvert";
  }else {
    document.getElementById("bouton").innerHTML="Eh beh non petit coquin, tu ne seras pas spoil &#129313 &#x1F92A";
    mode="caché";
    bouton.style.color = "#C500FF";

  }
}




