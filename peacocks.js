let name = prompt("Greetings, what shall I call you?");
console.log("Well " + name + " you have a magnificent name");

let query = prompt("Would you like to help by donate to conservation efforts??");
let message;

if (query=='yes') {
    message = "Your generosity is much appreciated!";
} else {
    message = "Please reconsider. A small donation will go a long way!"
}
    