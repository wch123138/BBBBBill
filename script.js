function myFunction() {
 var a=document.getElementById("a").value;
 var b=document.getElementById("b").value;
 var c=Number(a)+Number(b);
 if(a!=""){
    if(isNaN(a)){
      alert("error");
    }
 }
 if (b!=""){
  if(isNaN(b)){
    alert("error");
  }
 }
document.getElementById("demo").innerHTML = c;
}