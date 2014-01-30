Meteor.startup(function () {
    // code to run on server at startup
  }); 

Meteor.publish('allMessages', function(limit) {
  return Messages.find({}, {limit: limit,sort:{timestamp:-1}});
});

