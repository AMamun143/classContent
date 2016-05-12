var prompt = require('prompt');

prompt.start();

var life = {
	keepPromptingUser : function() {
		//store this in self
		var mySelfisCurrently = this;
		console.log(this);

		prompt.get(['hungry'], function(err, result) {
			console.log(result.hungry);

//			console.log(this);

		    if (result.hungry == 'yes'){
		    	console.log("Here's some Pad See Ew!")
		    	mySelfisCurrently.keepPromptingUser();
		    }else{
		    	console.log("Take a nap. You had a big meal.");
		    }
		});
	}

}

life.keepPromptingUser();
