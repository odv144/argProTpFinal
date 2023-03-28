$(".wizard").bootstrapWizard({
  height: 450,
});




var buttons = document.querySelectorAll('.wizard-submit');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    // Aquí puedes escribir el código que se ejecutará cuando el botón sea clickeado
    this.textContent = 'Enviando...';
   
    var self = this;
    setTimeout(function() {
      self.textContent = 'Enviado';
    }, 4000);
  
    console.log('Botón clickeado');
  });
}