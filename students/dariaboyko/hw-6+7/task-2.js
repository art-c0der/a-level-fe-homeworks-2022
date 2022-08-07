String.fromCharCode(...Array(123).keys())
  .slice(97)
  .split('')
  .forEach((letter) => {
    console.log(letter);
  });
