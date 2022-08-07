
const initialNuber = (...arguments) => {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === 0) {
      console.log("Zero");
    } else if (arguments[i] % 2 === 0) {
      console.log("Even");
    } else {
      console.log("Odd");
    }
  }

  arguments.map((item) => {
    item === 0 ? console.log("Zero") : item % 2 === 0 ? console.log("Even") : console.log("Odd");
  });
};

initialNuber(1, 2, 0, -5, -8);
