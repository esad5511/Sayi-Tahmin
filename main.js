var sayac,ustsayi,altsayi,tahmin;

var Basla=document.getElementById("Basla");
var Yukari=document.getElementById("Yukari");
var Asagi=document.getElementById("Asagi");
var Bildi=document.getElementById("Bildi");
var Durum=document.getElementById("Durum");

Basla.onclick=function(){

sayac=0;
ustsayi=prompt("Üst siniri Girin");
altsayi=prompt("alt siniri Girin");
altsayi=Number(altsayi);
tahmin=altsayi+(ustsayi-altsayi)/2;
tahmin=Math.floor(tahmin);

Durum.innerHTML="Bilgisayarın Tahmini:"+tahmin;
Basla.disable=true;

hesap();

}

Yukari.onclick=function(){
    altsayi=tahmin;
    tahmin=tahmin+((ustsayi-altsayi)/2);
        tahmin=Math.floor(tahmin);
        Durum.innerHTML="Bilgisayarın Tahmini:"+tahmin;
    hesap();
    
    }
 Asagi.onclick=function(){
        ustsayi=tahmin;
        tahmin=tahmin-((ustsayi-altsayi)/2);
        tahmin=Math.floor(tahmin);
        Durum.innerHTML="Bilgisayarın Tahmini:"+tahmin;
        hesap();
        
    }
 

Bildi.onclick=function(){
    Durum.innerHTML="Bilgisayar "+sayac+" Tahminde Bildi!";
     Basla.disabled = false;
        
 }
 function hesap(){
    sayac++;
    

    

    }