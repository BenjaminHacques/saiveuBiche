
// instanciations
feuPieton = new FeuPieton();
feuVoiture = new FeuVoiture();
view  = new FeuView(feuPieton, feuVoiture);
ctrl  = new FeuController(feuPieton, feuVoiture, view);
