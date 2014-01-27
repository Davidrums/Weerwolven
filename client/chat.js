Messages = new Meteor.Collection("messages");
Rollen = new Meteor.Collection("rollen");
Spellen = new Meteor.Collection("spellen");
Deelnemers = new Meteor.Collection("deelnemers");

if(Meteor.userId()!==null){
	var handle = Meteor.subscribeWithPagination("allMessages",10);
};

Accounts.config({
	sendVerificationEmail: true
});
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Template.messages.messages = function() {
	return Messages.find({},{sort:{timestamp:-1}});
}

Template.hello.greeting = function () {
    return "Welkom bij de weerwolven van Wakkerdam Online. Deze site is nog in ontwikkeling en dus nog niet representatief voor het uiteindelijke product";
};

Template.chatInput.events({
	"keydown #message" : function(event){
		if(event.which == 13){
			// Submit the form
			var message = document.getElementById('message');

			if(message.value !== ''){
				var d = new Date();
				Messages.insert({
			  		name: Meteor.user().username,
			      	message: message.value,
			    	timestamp: Date.now(),
			 	    fTimestamp: d
			    });
				message.value = "";
			}
			return false;
		}
		return true;
	}	
})

Template.chatbox.events({
	"click #load" : function(event){
		handle.loadNextPage();
	},
	"click #sub" : function(event){
		if(handle==null){
			handle = Meteor.subscribeWithPagination("allMessages",10);
			document.getElementById("sub").innerHTML="unsub"
		}
		else{
			handle.stop();
			handle = null;
			document.getElementById("sub").innerHTML="sub"
		}
	}

})