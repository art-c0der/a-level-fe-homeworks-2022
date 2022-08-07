function checkNumber(number) {
  const left = number % 2;
  if (number === 0) {
    console.log('zero');
  } else {
    switch (left) {
      case 1:
        console.log('odd');
        break;
      case -1:
        console.log('odd');
        break;
      case 0:
        console.log('even');
        break;
      default:
        console.log('Your number is not Integer');
    }
  }
}


