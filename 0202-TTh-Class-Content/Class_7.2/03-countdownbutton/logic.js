// Link to Firebase
var clickData = new Firebase("https://mstearne.firebaseio.com/");

// Set Initial Counter 
var initialValue = 100;
var clickCounter = initialValue;	

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
clickData.on("value", function(snapshot) {

	// Print the initial data to the console.
	console.log(snapshot.val());

	// Change the html to reflect the initial value.
	$("#clickValue").html(snapshot.val().clickCount);

	// Change the clickcounter to match the data in the database
	clickCounter = snapshot.val().clickCount;

	// Log the value of the clickCounter
	console.log(clickCounter);

	// Change the HTML Value
	$('#clickValue').html(clickCounter);

// If any errors are experienced, log them to console. 
}, function (errorObject) {

  	console.log("The read failed: " + errorObject.code);

});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#clickButton").on("click", function() {

	// Reduce the clickCounter by 1
	clickCounter--;

	// Alert User and reset the counter
	if (clickCounter == 0 ) {
		alert("Phew! You made it! That sure was a lot of clicking.");
		clickCounter = initialValue;
	}

	// Save new value to Firebase
	clickData.set({
		clickCount: clickCounter
	});

	// Log the value of clickCounter
	console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restartButton").on("click", function() {

	// Set the clickCounter back to initialValue
	clickCounter = initialValue;
	
	// Save new value to Firebase
	clickData.set({
		clickCount: clickCounter
	});

	// Log the value of clickCounter
	console.log(clickCounter);

	// Change the HTML Values
	$('#clickValue').html(clickCounter);


});

