typeof ('Succes' * 7); // number (The result is NaN, and NaN is of type number)
typeof (true + false); //number  (1+0=1)
typeof (12 / '6');  //number (/,*,-, c )
typeof ('number' + 15 + 3); // string (can be replaced with 'number' $ {15 + 3} )
typeof (15 + 3 + 'number'); // string (can be replaced with {15 + 3} $ 'number')
typeof([1] > null); //boolean (since the comparison)
typeof ('foo' + + 'bar'); //string (+'bar'=NaN, result='fooNaN')
typeof ('true' === true);  //boolean (since the comparison)
typeof (false === 'false');  //boolean (since the comparison)
typeof (null === '');//boolean (since the comparison)
typeof (!! 'false' === !! 'true');  //boolean (since the comparison)
typeof (['x'] =='x'); //boolean (since the comparison)
typeof !! {}; //boolean (!! Negation is of type boolean)
typeof ![]; //boolean (! Negation is of type boolean)
typeof([] + null + 1); // string (object[]+value=string)
typeof ([1, 2, 3] === [1, 2, 3]); //boolean (since the comparison)
typeof ({}+ [] + {} + [1]); // string (The sum of the object is aqual to the string type)
typeof (!+[] + [] + ![]); // string ((The sum of the object is aqual to the string type))
typeof (new Data(0) - 0); // object (All constructor functions created with 'new' will be of type 'object')
typeof (new Data(0) + 0);  // object (All constructor functions created with 'new' will be of type 'object')