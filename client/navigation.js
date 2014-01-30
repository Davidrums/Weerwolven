Template.header.events({
	"click .inactive": function(event){
		event.preventDefault();
		document.getElementsByClassName("active").item(0).className = "inactive";
		event.currentTarget.className = "active";
		Session.set("page",event.currentTarget.id)
	}
});

Template.spellen.helpers({
	selectedNav : function() {
		return (Session.get("page") === "spellenNav");
	}
});

Template.rollen.helpers({
	selectedNav : function() {
		return (Session.get("page") === "rollenNav");
	}
});

Template.chat.helpers({
	selectedNav : function() {
		return (Session.get("page") === "chatNav");
	}
});

Template.stemmen.helpers({
	selectedNav : function() {
		return (Session.get("page") === "stemmenNav");
	}
});