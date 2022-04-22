let n = Number(0);
const minus = document.getElementById("minus");

minus.addEventListener("click", (e) => {
  e.target = n--;
  document.getElementById("sum").innerHTML = n;
});
