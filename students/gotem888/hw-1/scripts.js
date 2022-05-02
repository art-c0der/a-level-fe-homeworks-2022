const minus = document.getElementById("minus");

minus.addEventListener("click", (e) => {
  n--;
  document.getElementById("sum").innerHTML = n;
});
