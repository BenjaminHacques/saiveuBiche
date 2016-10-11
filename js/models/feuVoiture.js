function FeuVoiture(){
  EventEmitter.call(this);
}

FeuVoiture.prototype = Object.create(EventEmitter.prototype); // Clock extends Observable
FeuVoiture.prototype.constructor = FeuVoiture;

FeuVoiture.prototype.toOrange = function() {

  setTimeout(function(){
    this.emit('VOITURE_ORANGE');
    this.toRed();
    
  }.bind(this), 3000);
};

FeuVoiture.prototype.toRed = function() {
  setTimeout(function(){
    this.emit('VOITURE_RED');
    this.toGreen();
    
  }.bind(this), 3000);
}

FeuVoiture.prototype.toGreen = function() {
  setTimeout(function(){
    this.emit('VOITURE_GREEN');

  }.bind(this), 22000);
}