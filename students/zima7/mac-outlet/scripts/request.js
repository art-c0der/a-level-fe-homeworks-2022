export default function sentRequest(url) {
  return new Promise(function (resolve, reject) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("get", url);
    xhttp.onload = function () {
      resolve(xhttp.response);
    };
    xhttp.send();
  });
}
