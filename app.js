function greeting(){
    let name = prompt("Greetings, what shall I call you?");
    document.write("Hello " + name + "!");
}

function askForDonation(){
    let query = prompt("Would you like to donate to conservation efforts?");
    let message; 
    
    if (query=='yes') {
        message = ("Your generosity is much appreciated!");
        document.write(message)
} else {

    askForDonation()
    //message = "Please reconsider. A small donation goes a long way!"
}

}