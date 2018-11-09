function getLocation(){
	var city = document.getElementById("text1").value
	var zipCode = document.getElementById("text2").value

	if(city != "" && zipCode != "") {
	alert("You can't enter both city and zip code.")
	document.getElementById("text3").value = ''
	return
	}

	if(city === "" && zipCode === "") {
	alert("Enter a city or zip code.")
	document.getElementById("text3").value = ''
	return
	}


	var urlForCity = 'https://api.openweathermap.org/data/2.5/weather?APPID=c18f555b27cfb3fa3d04b88f7b79cca4&q='

	var urlForZip = 'https://api.openweathermap.org/data/2.5/weather?APPID=c18f555b27cfb3fa3d04b88f7b79cca4&zip='

	var finalUrl = ''

	if(city != "") {
		finalUrl = urlForCity + city
	}
	else {
		finalUrl = urlForZip + zipCode
	}

	$.getJSON(finalUrl,function(json){
			var data = JSON.stringify(json)

            document.getElementById("text3").value = data
        });

}