$(function() {
  $('#license').click(function() {
      // ... on crée un masque...
      let mask = $('<div></div>', {
        // ... qui recouvre toute la page...
        css: {
          background: 'rgba(0, 0, 0, 0.5)',
          bottom: 0,
          left: 0,
          position: 'fixed',
          right: 0,
          top: 0
        },
        // ... et qui disparait quand on clique dessus.
        click: function() {
          mask.remove()
        }
      }).appendTo($('body')) // On l'ajoute au body.

      // On crée une zone de texte...
      let license = $('<div></div>', {
        css: {
          background: '#fff',
          left: '50%',
          padding: 20,
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          whiteSpace: 'pre-wrap',
          overflow: 'auto',
          maxHeight: '80vh'
        },
        // ... qui ne disparait pas quand on clique dessus...
        click: function(event) {
          event.stopPropagation()
        }
      }).load('LICENSE', function() { // ... et qu'on charge avec la licence...
        // ... ainsi qu'avec un bouton "fermer"...
        let close = $('<div></div>', {
          text: 'X',
          css: {
            border: '1px dotted black',
            cursor: 'pointer',
            padding: 10,
            position: 'absolute',
            right: 0,
            top: 0
          },
          // ... qui retire le masque quand on le clique.
          click: function() {
            mask.remove()
          }
        }).prependTo(license) // Le bouton est ajouté à la zone de texte...
      }).appendTo(mask) // .. qui est ajoutée au masque
  }).css('cursor', 'pointer') // Curseur sur le lien.
})
