// EventEmitter.js

function EventEmitter() {
	this.events = {} ; // associative array : event => functions to call
}

// Add a function to the event
EventEmitter.prototype.on = function(eventName,fn) {
	this.events[eventName] = this.events[eventName] || [];
	//On ajoute la fonction au tableau d'evenements
	this.events[eventName].push(fn);
};

// Trigger the event (call all the functions linked)
EventEmitter.prototype.emit = function(eventName,data) {
	//on déclenche l'événement
	if(this.events[eventName]){
		////On boucle et on appelle toutes les fonctions liées 
		this.events[eventName].forEach(function(fn){
			fn(data);
		});
	}
};