function getLocation(){
	var city = document.getElementById("text1").value
	var zipCode = document.getElementById("text2").value

	if(city != "" && zipCode != "") {
	alert("You can't enter both city and zip code.")
	}

	if(city === "" && zipCode === "") {
	alert("Enter a city or zip code.")
	}

}