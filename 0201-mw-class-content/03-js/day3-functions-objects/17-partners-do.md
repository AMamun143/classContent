
1. explain every line of the below object
2. DO NOT TOUCH THE INSIDE of the vincent object for the next steps.
1. Outside the vincent object, call the stopLifting key and change doYouLift to false.
2. Outside the vincent object, call the upProteinIntake key multiple times and up vincent's protein intake to 245 and alert gramsOfproteinIntake
3. Outside the vincent object, call the sayAllCatchPhrases key to get vincent to say all his catch phrases
4. vincent sent you a greeting card. vincent has lost his status as a bro. Outside the vincent object, Change vincent's bro key to false. Alert the value of the bro key to the screen.

```
var vincent = {
	bro : true,
	doYouLift : true,
	gramsOfproteinIntake : 240,
	catchPhraseOne : "I'm so broke right now because I just bought those new subwoofers.",
	catchPhraseTwo : "You're taking my picture? Hang on. Let me put on my sunglasses.",
	catchPhraseThree : "My fantasy football team is crushing it.",
	catchPhraseFour : "You’re hot. What’s your name?",
	sayAllCatchPhrases : function(){
		alert(this.catchPhraseOne);
		alert(this.catchPhraseTwo);
		alert(this.catchPhraseThree);
		alert(this.catchPhraseFour);
	},
	upProteinIntake : function(){
		this.gramsOfproteinIntake++;
	},
	stopLifting : function(){
		this.doYouLift = false;
	}
}
```