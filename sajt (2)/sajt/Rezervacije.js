function funkcija(){
var ime=document.getElementById('ime').value;
var prezime=document.getElementById('prezime').value;
var telefon=document.getElementById('telefon').value;
var email=document.getElementById('email').value;
var error=document.getElementById('error');

var pon=document.getElementById('pon');
var u=document.getElementById('u');
var s=document.getElementById('s');
var c=document.getElementById('c');
var pet=document.getElementById('pet');
var sub=document.getElementById('sub');

var de=document.getElementById('de');
var ma=document.getElementById('ma');
var iz=document.getElementById('iz');
var man=document.getElementById('man');
var ja=document.getElementById('ja');



var text;

error.style.padding = "10px";

if(ime.length <3){
    text = "Unesite validno ime";
    error.innerHTML = text;
    return false;
}
if(prezime.length<3){
    text = "Unesite validno prezime";
    error.innerHTML = text;
    return false;
}
if(isNaN(telefon) || telefon.length != 10){
    text = "Unesite validan kontakt telefon";
    error.innerHTML = text;
    return false;
}
if(email.indexOf("@") == -1 || email.length < 6){
    text = "Unesite validnu email adresu";
    error.innerHTML = text;
    return false;
}
/*for(var i=0; i<x.length; i++){
    if(x[i].checked){
        valid=true;
        break;
    }
}
if(valid){
    alert("Uspesno ste izvrsili rezervaciju");
}else{
    text = "Izaberite samo jedan dan za rezervaciju";
    error.innerHTML = text;
    return false;
}*/
if(de.checked==false && ma.checked==false && iz.checked==false && man.checked==false && ja.checked==false){
    text = "Izaberite odredjenu uslugu";
    error.innerHTML = text;
    return false;
}

if(pon.checked==false && u.checked==false && s.checked==false && c.checked==false && pet.checked==false && sub.checked==false){
    text = "Izaberite samo jedan dan za rezervaciju";
    error.innerHTML = text;
    return false;
}
if((pon.checked==true && u.checked==false && s.checked==false && c.checked==false && pet.checked==false && sub.checked==false) ||
(pon.checked==false && u.checked==true && s.checked==false && c.checked==false && pet.checked==false && sub.checked==false) ||
(pon.checked==false && u.checked==false && s.checked==true && c.checked==false && pet.checked==false && sub.checked==false) ||
(pon.checked==false && u.checked==false && s.checked==false && c.checked==true && pet.checked==false && sub.checked==false) ||
(pon.checked==false && u.checked==false && s.checked==false && c.checked==false && pet.checked==true && sub.checked==false) ||
(pon.checked==false && u.checked==false && s.checked==false && c.checked==false && pet.checked==false && sub.checked==true)){
    alert("Uspesno ste izvrsili rezervaciju");
}


return true;

}
