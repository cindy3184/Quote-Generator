const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "70b945a681msh8d168d5c4aa23c1p1bcb28jsn7e989a896147",
		"x-rapidapi-host": "quotes15.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});