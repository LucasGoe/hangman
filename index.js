const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word,guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);
  const wordSoFar = displayWordSoFar(word, guesses);   // toegevoegd om wordSoFar
  console.log(wordSoFar);                              // te laten zien
  const letter = question("Raad een letter: ", {limit: [/[a-z]/]}).substr(0, 1).toLowerCase();
  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

  const playerWon = isGameWon(word, guesses);
  if (playerWon) {
    console.log("Gefeliciteerd! Je hebt gewonnen.\n");
    console.log("Volgende ronde!\n");
    return;
  }
  const playerLost = isGameLost(word, guesses);
  if (playerLost) {
    console.log("Helaas! Je hebt verloren.\n");
    console.log("Volgende ronde!\n");
    return;
  }
  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
  game("javascript", []);
}

  console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

  game("javascript", []);

