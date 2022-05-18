const createArraysWithObecth = (...arguments) => {
	let arrayObjects = [];
	let identificator = 1;
	arguments.map((item) =>
	  arrayObjects.push({
		name: item,
		id: identificator++,
	  })
	);
  
	//   arguments.map((item) => arrayObjects.push(objectGenerator(item)));
	//   function objectGenerator(name) {
	//     return {
	//       name: name,
	//       id: identificator++,
	//     };
	//   }
	return console.log(arrayObjects);
  };
  
  createArraysWithObecth("Anna", "Don", "Jakob");
