//The wrong way to store a JavaScript object using localStorage

	//set a key named jimmy to an object
	localStorage.setItem("jimmy", {name: 'jimmy', shoes: 'nike', bmxBike: 'harley'});

	//see what the jimmy key looks like in the console
	//it will output to: "[object Object]". It won't show the full object. This is because localStorage can only store strings
	console.log(localStorage.getItem('jimmy'));

//The right way to store a JavaScript object using localStorage

	//convert the object into a string with JSON.stringify, and set it to the jimmy key
	localStorage.setItem("jimmy", JSON.stringify({name: 'jimmy', shoes: 'nike', bmxBike: 'harley'}));

	//now when you execute this code in the console, you'll see this: 
	//"{"name":"jimmy","shoes":"nike","bmxBike":"harley"}"
	//it's a string! Not an object.
	console.log(localStorage.getItem('jimmy'));
	
	//to convert the string into an object, we use JSON.parse
	//and now we see this:
	//Object {name: "jimmy", shoes: "nike", bmxBike: "harley"}
	console.log(JSON.parse(localStorage.getItem('jimmy')));

	//to convert the string into an object, we use JSON.parse
	//and now we see this:
	//Object {name: "jimmy", shoes: "nike", bmxBike: "harley"}
	console.log(JSON.parse(localStorage.getItem('jimmy')));
	