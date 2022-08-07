function alphabetLowerCase() {
  for (let i = 65; i <= 90; i++) {
    console.log(String.fromCharCode(i).toLowerCase());
  }

  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    console.log(String.fromCharCode(i));
  }
}

alphabetLowerCase();
