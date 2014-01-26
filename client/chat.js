Messages = new Meteor.Collection("messages");
Rooms = new Meteor.Collection("rooms");

Template.messages.messages = function() {
	return Messages.find({}, {limit:8,sort:{timestamp:-1}});
}

Template.hello.greeting = function () {
    return "Welcome to chat.";
};

Template.hello.events({
    'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
	    console.log("You pressed the button");
    }
});

Template.chatInput.events({

})