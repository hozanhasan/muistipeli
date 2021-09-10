function positiivinenNegatiivinen()
{
  var arvo = 0;
  var tulosta = "";
  arvo=parseInt(document.getElementById("luku").value);
  tulosta="Antamasi luku: " + arvo;
  if (arvo>=0)
    {
      tulosta += " on positiivinen";
    }
    else
    {
      tulosta += " on negatiivinen";
    }
    document.getElementById("demo1").innerHTML = tulosta;
  }


  function myfunction()
  {
    var arvo =0;
    var tulosta ="";
    arvo=parseInt(document.getElementById("luku2").value);
    if(arvo==1){
      tulosta ="Maanantai";
    }
    else if (arvo==2) {
      tulosta="tiistai";
    }
    else if (arvo==3) {
      tulosta="Keskiviikko";
    }
    else if (arvo==4) {
      tulosta="Torstai";
    }
    else if (arvo==5) {
      tulosta="Perjaintai";
    }

    else if (arvo==6) {
      tulosta="Lauantai";
    }
    else if (arvo==7) {
      tulosta="Sunnuntai";
    }
    document.getElementById("demo2").innerHTML = tulosta;
  }

function check_leapyear() {
  var arvo =0;
  var tulosta ="";
    arvo=parseInt(document.getElementById("year").value);
    if(arvo%4==0 && arvo%100!=0){
      tulosta="vuosi on karkausvuosi";
    }
    else if(arvo%400==0){
      tulosta="vuosi on karkausvuosi";
    }
    else {
      tulosta="vuosi ei ole karkausvuosi";
    }
    document.getElementById("demo3").innerHTML = tulosta;
}


 function summakeskiarvo()
 {
 var n1,n2,n3,n4,n5;
 var summa,keskiarvo;
 var tulos;
 n1 = parseInt(document.getElementById("Number1").value);
 n2 = parseInt(document.getElementById("Number2").value);
 n3 =parseInt(document.getElementById("Number3").value);
 n4 = parseInt(document.getElementById("Number4").value);
 n5 =parseInt(document.getElementById("Number5").value);

  summa = n1+ n2+ n3+ n4+ n5;
  keskiarvo=summa/5;
  tulos="lukujen summaon:";
  tulos+=summa;
  tulos+="ja keski arvo on:";
  tulos+=keskiarvo;
  document.getElementById("demo4").innerHTML=tulos;
   }

   function kertolasku() {
     var luku;
     var lause;

    luku=parseInt(document.getElementById("luku1").value);

    lause=luku+"x1="+luku*1+"<br>";
    lause+=luku+"x2="+luku*2+"<br>";
    lause+=luku+"x3="+luku*3+"<br>";
    lause+=luku+"x4="+luku*4+"<br>";
    lause+=luku+"x5="+luku*5+"<br>";
    lause+=luku+"x6="+luku*6+"<br>";
    lause+=luku+"x7="+luku*7+"<br>";
    lause+=luku+"x8="+luku*8+"<br>";
    lause+=luku+"x9="+luku*9+"<br>";
    lause+=luku+"x10="+luku*10;
  document.getElementById("demo5").innerHTML=lause;
   }
