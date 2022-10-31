	function details(){
		const locatio = document.getElementById('searchbar');
		const datas = document.getElementById('dataa');
		const url="https://api.openweathermap.org/data/2.5/weather?q="+locatio.value+"&appid=e3ba6bd887eb1a70c4d4483f3997809c&units=metric";
			fetch(url)
			.then((response) => response.json())
			.then((data) => 
				calcu(data)
				);
	}
	function calcu(data)
	{
		document.getElementById('main').innerHTML = data.weather[0].main;
		document.getElementById('description').innerHTML = data.weather[0].description;
		document.getElementById('city').innerHTML = data.name;
		document.getElementById('country').innerHTML = data.sys.country;
		document.getElementById('temp').innerHTML=Math.floor(data.main.temp);
		document.getElementById('windspeed').innerHTML = data.wind.speed;
		document.getElementById('humidity').innerHTML = data.main.humidity;
		document.getElementById('pressure').innerHTML = data.main.pressure;
		document.getElementById('tempa').innerHTML=Math.floor(data.main.temp);
		document.getElementById('picture').src= "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
				
	}