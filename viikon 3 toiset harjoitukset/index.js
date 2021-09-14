function pisteet(){
  var luku=0;
  var sana=document.getElementById('scsana').value;
  for (var y=0;y<=sana.length;y++){
    switch (sana[y]) {
      case "A":
      case "E":
      case "I":
      case "N":
      case "S":
      case "T":
        luku =luku + 1;
        break;
      case "O":
      case "K":
      case "L":
        luku=luku+ 2;
        break;
      case "U":
      case "M":
        luku=luku+3;
        break;
      case "Y":
      case "H":
      case "J":
      case "P":
      case "R":
      case "V":
        luku=luku+4;
        break;
      case "Ö":
      case "D":
        luku=luku+7;
        break;
      case "B":
      case "F":
      case "G":
        luku=luku+8;
        break;
      case "C":
        luku=luku+10;
        break;
      default:
        luku=luku+12;
    }
  }
  document.write("sanan "+sana+" pisteet ovat: "+luku);
}

function arvonumerot(){
  var luku1=Math.floor(Math.random() * 40+1);
  var luku2=Math.floor(Math.random() * 40+1);
  var luku3=Math.floor(Math.random() * 40+1);
  var luku4=Math.floor(Math.random() * 40+1);
  var luku5=Math.floor(Math.random() * 40+1);
  var luku6=Math.floor(Math.random() * 40+1);
  var luku7=Math.floor(Math.random() * 40+1);
    document.write(luku1+","+luku2+","+luku3+","+luku4+","+luku5+","+luku6+","+luku7);
}
function taulokkomuotoon(){
  var tolusta="";
  var luku1=[[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  tolusta="<table style='width:100%'><br>";
  for (var y=0;y<=4;y++){
    tolusta+="<tr>";
    for (var x=0;x<=3;x++){
      tolusta+="<td>" + luku1[y][x] + "</td><br>";
    }
    tolusta+="</tr>";
  }
  tolusta+="</table>";
  document.write(tolusta);
}
function ajoneuvo()
{
var tulosta="";
var luku=0
