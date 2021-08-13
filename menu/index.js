function order(index){
	$name = prompt("Enter your name");
	$num = prompt("Enter your phone number");
	$address = prompt("Enter your address");
	alert(document.querySelectorAll("h2")[index].innerHTML + " was ordered by name " + $name + 
		". Please wait for 40 minutes. Your order will arrive at the address " + $address + 
		". The amount of your order: " + document.querySelectorAll("button")[index + 1].value + " dollars.");
}