//constants

const $main = $('#main')
const $author = $('#author')


//event listener

$('#btn').click(function(){

	$.ajax("https://quotes15.p.rapidapi.com/quotes/random/", {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "70b945a681msh8d168d5c4aa23c1p1bcb28jsn7e989a896147",
			"x-rapidapi-host": "quotes15.p.rapidapi.com"
		}
		
})
.then(function(data) {
	console.log(data)
	console.log(data.content);
	$main.text(data.content);
    $author.text(data.originator.name);

})

.catch(err => {
	console.error(err);
});

});


