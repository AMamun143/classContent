
### need to re-write these

### Everyone do 25 minutes

Together lets make a Car constructor. So we are going to make a Car constructor. This car constructor should have a make, model, year, hp. It should be able to return its full name, ex: "1967 Ford Mustang". Its should be able to be supercharged, which will ramp up the hp by 150hp. 

```
var Car = function (make, model, year, hp) {
	this.make = make;
	this.model = model;
	this.year = year;
	this.hp = hp;
	this.fullName = function(){
		// this.year + " " + this.make + " " + this.model
		return [this.year, this.make, this.model].join(" ")
	};
	this.supercharge = function(){
		this.hp += 150
		return this.
	};
}


var Person = function(firstName, lastName, age) {
	this.firstName = name;
	this.LastName = lastName;
	this.age = age;
	this.fullName = function(){
		return [this.firstName, this.lastName].join(" ")
	};
}

```

# You do

Lets tie these two things together!!! Lets make a Garage constructor. People are building car collections like hot cakes. The Garage constructor should have the following attributes: owner - which will be a Person object, cars - which will start as an empty array, it will hold Car objects. addCar - which will be a behavior that adds a new Car to the cars array. changeOwner - which will transfer ownership to a new Person. 


```

var Garage = function(owner) {
	this.owner = owner;
	this.cars = [];
	this.addCar = function(car){
		this.cars.push(car)
	};
	this.changeOwner = function(newOwner){
		this.owner = newOwner
	};
}
```

Review!


### Partners do (30 minutes)

# Create an Account

An account should have the following attributes:

- a balance (starts at 0) -> `balance`

An account should be able to:

- deposit money -> `deposit`
	- should deposit money into the current account
- withdraw money -> `withdraw`
	- should withdraw money from the current account but only if enough is available

# Create a Bank

A Bank should have the following attributes:

- `name` -> a name
- `address` -> an address
- `accounts` -> accounts
	+ - you decide how this should be represented (array vs object)
	+ - a bank starts with a checking AND savings account
- `information` -> display its information 
	- should return the banks name and address
- `makeTransaction` -> make a transaction
	+ - should accept three arguments -> a transaction type, an account type, and an amount
	+ - should use the appropriate account functions to perform a transaction (deposit or withdrawal)
	+ - should render the new balances
- `render` -> display the account balances
	+ - should take the current balances of the savings and checking accounts, then update the DOM display of the bank account balances


```
var Account = function() {
	this.balance = 0;
}

Account.prototype.deposit = function(amount) {
	if (amount > 0) {
		this.balance += amount;
	}
};

Account.prototype.withdraw = function(amount) {
	if (amount <= this.balance) {
		this.balance -= amount;
	}
};

var Bank = function(name, address) {
	this.name = name;
	this.address = address;
	this.accounts = {
		checking: new Account(),
		savings: new Account()
	};
};

Bank.prototype.information = function() {
	return this.name + '\n' + this.address;
};

Bank.prototype.makeTransaction = function(transaction, account, amount) {
	var currentAccount = this.accounts[account];
	currentAccount[transaction](parseInt(amount));
	this.render();
};

```