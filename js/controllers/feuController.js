function FeuController(modelPieton, modelVoiture, view){ //initialisations de notre controleur
  this._modelPieton = modelPieton;
  this._modelVoiture = modelVoiture;
  this._view =  view;

  this._view.on('BUTTON_PRESS', function() {
    if (this._modelPieton._isReady) {
      this._modelPieton.toRedCl();
      this._modelVoiture.toOrange();
    } else {
      console.log('Button not ready.')
    }
  }.bind(this));

}
