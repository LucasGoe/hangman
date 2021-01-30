function displayWordSoFar(word, guesses) {
    // - [x] zet je testje op test.only (later weer weghalen)
    // - [x] loggen: wat is word, wat is guesses
    //console.log("WOORD TE RADEN:", word);
    //console.log("GUESSES:", guesses);
    // DOEL:
    // WOORD: javascript, GUESSES: [] -> "_ _ _ _ _ _ _ _ _ _ "
    // WOORD: javascript, GUESSES: ['a', 'b'] -> "_ a _ a _ _ _ _ _ _ "

    // - [x] javascript "splitten" split() -> ['j','a','v','a','s','c','r','i','p','t']
    const lettersInWordArray = word.split("");
    //console.log("ARRAY OF LETTERS", lettersInWordArray);
    // - [x] een loop maken -> ['j','a','v','a','s','c','r','i','p','t']
    let output = "";
    for (let index = 0; index < lettersInWordArray.length; index++) {
        const letterInWord = lettersInWordArray[index];
        //console.log("1 LETTER OF WORD TO GUESS:", letterInWord);
        // - [x] checken: zit de letter in guesses?
        const isLetterGuessed = guesses.includes(letterInWord);
        //console.log(letterInWord, "GERADEN?", isLetterGuessed);
        // - [x] if else
        // - [x] zo nee: "_ "
        if (!isLetterGuessed) {
            output = output + "_ ";
            }
        // - [x] zo ja: "j " (niet j, maar de letter die we dan checken)
        if (isLetterGuessed) {
            output = output + letterInWord + " ";
        }
    }
    //console.log(output);
    // - [x] klaar? -> onze string die we hebben gemaakt returnen
    return output;
}

function isGameWon(word, guesses) {
    // WRITE ME
    // isGameWon todo list:
    // DOEL:
    // word = "javascript" guesses = ["j", "a", "v", "s", "c", "r", "i", "p", "t"] true
    // word = "javascript" guesses = [], ["j", "a"] false
    // Strategie:
    // Kunnen we 1 letter vinden die je niet hebt geraden? return false
    // Kunnen niet 1 letter vinden die je niet hebt geraden return true
    // - [x] loggen: wat is word & guesses
    console.log("WOORD TE RADEN:", word);
    console.log("GUESSES:", guesses);

    // - [x] word -> word.split(""): ["j", "a", "v","a", "s", "c", "r", "i", "p", "t"]
    const lettersInWordArray = word.split("");
    console.log("ARRAY OF LETTERS", lettersInWordArray);

    // - [x] loopen over dat array met de letters van het woord
    let output = "";
    for (let index = 0; index < lettersInWordArray.length; index++) {
        const letterInWord = lettersInWordArray[index];
        console.log("1 LETTER OF WORD TO GUESS:", letterInWord);
        const isLetterGuessed = guesses.includes(letterInWord);
        console.log(letterInWord, "GERADEN?", isLetterGuessed);
        // - [x] if guesses true -> we gaan door
        // geen code nodig, ga door naar;
        // - [x] if guesses false -> we stoppen: return false
        if (!isLetterGuessed) {
            return false;
        }
    }
    // - [x] Zijn we aan het einde van de loop? aan het einde van de functie return true
    return true;
}

    // EERSTE idee TODO-OPZET isGameWon
    // - [ ] isGameWon is false zolang alle letters nog niet zijn geraden
    // - [ ] maak een loop die geraden letters checkt
    // let gameWon = false;
    // for (let index = 0; index < lettersInWordArray.length; index++) {
    //   if ();
    // - [ ] zitten ze in het te raden woord Array
    // - [ ] zoja, verklein de Array
    // - [ ] is geraden letter laatste element in Array, return isGameWon is true

function isGameLost(word, guesses) {
    // DOEL:
    // word = "javascript" guesses = ["q", "w", "e", "y", "u", "o", "d"]; -> true
    // word = "javascript" guesses = ["q", "w", "e", "a", "t"]; -> false
    // STRATEGIE:
    // fouten tellen
    // 7 fout (of meer?) -> return true
    // minder dan 7 fout -> return false
    // - [x] for loop over de guesses
    // - [x] voor elke guess
    // - [x] counter aanmaken -> start bij 0
    let count = 0;
    for (let index = 0; index < guesses.length; index++) {
        const guess = guesses[index];
        // - [x ] zit deze guess (letter) in het woord word.includes(guess)
        const isLetterGuessed = word.includes(guess);
        console.log(guesses, "GERADEN letter?", guess);
        // - [x] if
        // - [x] Als true (we doen niets)
        // - [x] Als false "+ doen" -> counter met 1 verhogen
        if (!isLetterGuessed) {
            count++;
            console.log(count);
        }
    }
    //console.log('wat is dit?', isLetterGuessed)
    // - [ ] aan het eind van de functie if statement
    // - [ ] if
    //- [ ] count is 7 -> return true
    if (count === 7) {
        return true;
    }
    // - [ ] count is minder dan 7 -> return false
    if (count <= 7) {
        return false;
    }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};