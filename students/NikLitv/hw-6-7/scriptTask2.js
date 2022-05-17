const allLoverCaseLetters = function(word){
    let regExp = /[a-z]+$/
    for(let i = 0; i < word.length; i++){
        if(regExp.test(word[i]) ){
            console.log(word[i])
        }
    }
    
}

allLoverCaseLetters('Hello World')



