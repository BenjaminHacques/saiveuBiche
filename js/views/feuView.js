function FeuView(modelPieton, modelVoiture){
  EventEmitter.call(this); // appel du constructeur parent 
  this._modelPieton = modelPieton; // reference au modele
  this._modelVoiture = modelVoiture; // reference au modele
  this._createElements(); //appel de la méthode _createElements() ci dessous
  this._bindListeners();// appel de la méthode _bindListeners() ci dessous

  
  this._modelPieton.on('PIETON_RED_CLIGN', function() {
    $('.feuPieton').removeClass('p_red');
    $('.feuPieton').addClass('p_red_c');
  });
  this._modelPieton.on('PIETON_ORANGE', function() {
    $('.feuPieton').removeClass('p_red_c');
    $('.feuPieton').addClass('p_orange');

    $('#biche').addClass('bicheTrav');
  });
  this._modelPieton.on('PIETON_ORANGE_CLIGN', function() {
    $('.feuPieton').removeClass('p_orange');
    $('.feuPieton').addClass('p_orange_c');
  });
  this._modelPieton.on('PIETON_RED', function() {
    $('.feuPieton').removeClass('p_orange_c');
    $('.feuPieton').addClass('p_red');

    $('#biche').removeClass('bicheTrav');
  });

  this._modelVoiture.on('VOITURE_ORANGE', function() {
    $('.feuVoiture').removeClass('v_green');
    $('.feuVoiture').addClass('v_orange');
  });
  this._modelVoiture.on('VOITURE_RED', function() {
    $('.feuVoiture').removeClass('v_orange');
    $('.feuVoiture').addClass('v_red');
  });
  this._modelVoiture.on('VOITURE_GREEN', function() {
    $('.feuVoiture').removeClass('v_red');
    $('.feuVoiture').addClass('v_green');
  });
}

FeuView.prototype = Object.create(EventEmitter.prototype); // ClockView extends Observable
FeuView.prototype.constructor = FeuView; // Constructeur

FeuView.prototype._bindListeners = function(){
  $('button').click(function() {
    this.emit('BUTTON_PRESS')
  }.bind(this));
};

FeuView.prototype._createElements = function(){
  
  var body = $(document.body);

  this._feuPieton1 = $('<div>');
  this._feuPieton2 = $('<div>');
  this._feuVoiture1 = $('<div>');
  this._feuVoiture2 = $('<div>');
  this._button1 = $('<button>O</button>');
  this._button2 = $('<button>O</button>');

  this._feuPieton1.attr('class', 'feuPieton');
  this._feuPieton2.attr('class', 'feuPieton');
  this._feuVoiture1.attr('class', 'feuVoiture');
  this._feuVoiture2.attr('class', 'feuVoiture');
  this._button1.attr('class', 'button');
  this._button2.attr('class', 'button');

  this._feuPieton1.attr('id', 'feuPieton1');
  this._feuPieton2.attr('id', 'feuPieton2');
  this._feuVoiture1.attr('id', 'feuVoiture1');
  this._feuVoiture2.attr('id', 'feuVoiture2');
  this._button1.attr('id', 'button1');
  this._button2.attr('id', 'button2');

  body.append(this._feuPieton1);
  body.append(this._feuPieton2);
  body.append(this._feuVoiture1);
  body.append(this._feuVoiture2);
  body.append(this._button1);
  body.append(this._button2);



  $('.feuPieton').addClass('p_red');
  $('.feuVoiture').addClass('v_green');
  
};
