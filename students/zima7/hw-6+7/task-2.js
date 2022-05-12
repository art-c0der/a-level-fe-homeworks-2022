let englishAlphabet = 'AaBbCcDdEeFfGgHhIiJjLlMmNnOoPpQqKkRrSsTtUuVvWwXxYyZz';

function loverCaseChar(englishAlphabet) {
    for (let i = 0; i < englishAlphabet.length; i++) {
        if (englishAlphabet[i] === englishAlphabet[i].toLowerCase()) {
            console.log(englishAlphabet[i]);
        }
    }
}

loverCaseChar(englishAlphabet);
