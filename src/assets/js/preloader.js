var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 5000);
}

function showPage() {
  document.getElementById("page").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
