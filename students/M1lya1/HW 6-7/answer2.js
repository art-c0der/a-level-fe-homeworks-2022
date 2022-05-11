const alphabet = () => {
    for (let i = 97; i < 123; i++) {
        console.log(String.fromCharCode(i));
    }
};
alphabet();

// можно и так, по сути одно и тоже, но циклом проще)

number = 97;

const alphabetNew = () => {
    
    console.log(String.fromCharCode(number));
    number++;
    if(number === 123) return
     alphabetNew();
     
}
alphabetNew();
