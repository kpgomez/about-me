/*function greeting(){
    let name = prompt("Greetings, what shall I call you?");
    document.write("Hello " + name + "!");
}

function askForDonation(){
    let query = prompt("Would you like to donate to conservation efforts?");
    query = query.toLowerCase()
    let message; 
    
    if (query=='yes' || 'y') {
        amount = prompt("How much would you like to donate?")
        message = ("Your " + amount + "donation is much appreciated!");
        document.write(message)
} else {

    askForDonation()
    //message = "Please reconsider. A small donation goes a long way!"
}

}

let donation = 0;

while (donation <= 10){
    donation = Number(donation);


}

for (i=0; i <= 100; i++){

}

function askForDonation(){
    let query = prompt("Would you like to donate to conservation efforts?");
    query = query.toLowerCase()
    let message; 
    
    if (query=='yes' || 'y') {
        amount = prompt("How much would you like to donate?")
        message = ("Your $" + amount + "donation is much appreciated!");
        document.write(message)
} else {
        
}

let query = prompt("Would you like to donate to conservation efforts?");
query = query.toLowerCase()
let message; 
    
if (query=='yes' || 'y') {
    amount = prompt("How much would you like to donate?")
    message = ("Your $" + amount + " donation is much appreciated!");
    document.write(message)}
else {

    }

donation = 0;
while (donation <= 10){
    askForDonation();
}

function askForMore(){
    beg = prompt("That's it?!? Are you sure?")
*/

function askDonation(){
	answer = prompt("Would you like to donate?");
	answer = answer.toLowerCase();
	if (answer == 'yes'){
		askAmount();
        showGratitude(amount);
	} else {
		document.write("We hope you will reconsider donating in the future.");
		//document.write("Thanks for visiting!")
	}
}

function askAmount() {
	amount = prompt("How much would you like to donate?");
	if (amount >= 5) {
		//document.write("Thank you for your $" + amount + " donation!")
        sayThankYou(amount);
        showGratitude(amount);
	}
	else {
		askForMore();
	}

}


function askForMore() {
	//i = 0;
    let i = 0;
	while (i < 5) {
		beg = prompt("Please give us MORE. How much can really give?");
		if (beg >= 5) {
			//document.write("Thank you for your " + amount + " donation!");
            sayThankYou(beg);
            amount = beg;
            i =+ beg;
		} //else {
		 	//beg();
		//}
	//}
}
}

function sayThankYou(amount){
	document.write("Thank you for your $" + amount + " donation")
}

//for (let i = 0; i <= amount; i++){
  //  document.write('<img src="$');
//}
function showGratitude(amount){
    let output = '';
    let level = amount;
    for (let i = 0; i <= amount; i++){
        //document.write(i);
        output += "🦚";
    }    
    return document.write(output);
}

