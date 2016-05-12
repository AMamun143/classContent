//when you're done, create a constructor function for life

var prompt = require('prompt');

prompt.start();

var life = {
	hungry: 'yes',
	keepPromptingUser : function() {
		prompt.get(['hungry'], function(err, result) {
			life.hungry = result.hungry;
		    if (life.hungry == 'yes'){
		    	console.log("Here's some Pad See Ew!")
		    	life.keepPromptingUser();
		    }else{
		    	console.log("Take a nap. You had a big meal.");
		    }
		});
	}

}

life.keepPromptingUser();
