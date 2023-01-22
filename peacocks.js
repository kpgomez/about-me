let visitor = prompt("Greetings, what shall I call you?");
document.write("Well " + visitor + ", you have a magnificent name! ");

let query = prompt("Would you like to help by donating to conservation efforts??");
let message;

if (query=='yes') {
    message = "Your generosity is much appreciated!";
} else {
    message = "Please reconsider. A small donation will go a long way to preserve this magnificent creature!"
}
document.write(message);