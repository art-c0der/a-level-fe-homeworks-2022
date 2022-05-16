const createArrayWithObjects = (...arrayOfNames) => {
  return arrayOfNames.map(
    (element,index) =>
      (element = {
        name: element,
        id: index,
      }),
  );
};

console.log(createArrayWithObjects('dasha', 'kate', 'karl'));
