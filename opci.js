/** function slika(){
   var element = document.getElementById("skupo");
   if (element.style.display === "block") {
      element.style.display = "none"; 
   }
   else{
       element.style.display = "block";
   }    
}
function testResults (form) {
    var TestVar = form.ime.value;
    document.getElementById("dem").innerHTML=("Zadnju poruku šalje nam " + TestVar);
    var TestVar = form.god.value;
    document.getElementById("dem1").innerHTML=("&nbsprođen/a " + TestVar);
    var TestVar2 = form.email.value;
    document.getElementById("dem2").innerHTML=(".godine sa e-maila " + TestVar2);
    var TestVar = form.poruka.value;
    document.getElementById("dem3").innerHTML=("&nbspa poruka glasi: " + TestVar);
    
}
**/
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Hello") {
    x.innerHTML = "Swapped text!";
  } else {
    x.innerHTML = "Hello";
  }
}