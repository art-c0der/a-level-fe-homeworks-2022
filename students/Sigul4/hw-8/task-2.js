// ********************
// 
// Make an array of objects
// 
// ********************

function CreateArrOfObj( ...names){
    arrayToReturn = []
    names.map((elem, index) =>{
        arrayToReturn[index] = {
            name: elem,
            id: index+1,
        }
    })
    return arrayToReturn
} 

CreateArrOfObj('Petua','Petua','Petua','Petua','Petua')
