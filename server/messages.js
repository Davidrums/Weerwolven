Messages = new Meteor.Collection("messages");
Rollen = new Meteor.Collection("rollen");
Spellen = new Meteor.Collection("spellen");
Deelnemers = new Meteor.Collection("deelnemers");


Meteor.startup(function() {
	var d = new Date();

	if(Meteor.users.find().count()==0){
		var x = Accounts.createUser({username:"David Soff", email:"David@soff.nl", password:"Banzai"});
	}

	if(Spellen.find().count()==0){
		var spel = {start: "now", gameMasterId: x, dayNumber:0 }
		Spellen.insert(spel);
		spel = {start: "now", gameMasterId: x, dayNumber:2 }
		Spellen.insert(spel);
	}

	if(Rollen.find().count()==0){
		var rol = {
			title:"Burger",
			aliance:"goed",
			description:"niks speciaals"
		}
		Rollen.insert(rol);
		rol = {
			title:"Weerwolf",
			aliance:"slecht",
			description:"mag mensen doden in de nacht"
		}
		Rollen.insert(rol);
	}
});
