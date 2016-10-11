function FeuPieton(){
  EventEmitter.call(this);
  this._isReady = true;
}

FeuPieton.prototype = Object.create(EventEmitter.prototype); // Clock extends Observable
FeuPieton.prototype.constructor = FeuPieton;

FeuPieton.prototype.toRedCl = function() {

  this.emit('PIETON_RED_CLIGN');

  setTimeout(function(){
    this.emit('PIETON_ORANGE');
    this.toOrange();
    
  }.bind(this), 6000);
};

FeuPieton.prototype.toOrange = function() {
  setTimeout(function(){
    this.emit('PIETON_ORANGE_CLIGN');
    this.toOrangeCl();

  }.bind(this), 17000);
}

FeuPieton.prototype.toOrangeCl = function() {
  setTimeout(function(){
      this.emit('PIETON_RED');
      this._isReady = false;
      this.toRed();

    }.bind(this), 5000);
}

FeuPieton.prototype.toRed = function() {
  setTimeout(function(){
    this._isReady = true;

  }.bind(this), 180000);
}

