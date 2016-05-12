var Dud = require('./dud.js');
var PartyBus = require('./party_bus.js');

var zbtPartyBus = new PartyBus();

var myDud = new Dud();
//none
console.log(myDud);
console.log('dudes?', zbtPartyBus.duds);

//a dudess enters the party bus
zbtPartyBus.addDud('male');

console.log('dudes?', zbtPartyBus.duds);
