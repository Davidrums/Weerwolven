Messages = new Meteor.Collection("messages");
Rooms = new Meteor.Collection("rooms");

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Template.messages.messages = function() {
	return Messages.find({}, {limit:8,sort:{timestamp:-1}});
}

Template.hello.greeting = function () {
    return "Welcome to chatapp, login or signup to start chatting";
};

Template.chatInput.events({
	"keydown #message" : function(event){
		if(event.which == 13){
			// Submit the form
			var message = document.getElementById('message');

			if(name.value != '' && message.value != ''){
				d = new Date();
				Messages.insert({
			  		name: Meteor.user().username,
			      	message: message.value,
			    	timestamp: Date.now(),
			 	    fTimestamp: d
			    });

				name.value = '';
				message.value = '';
			}
		}
	}	
})