$(".send").click(function() {
  if($('.cp').val().match("[0-9][0-9][0-9][0-9][0-9]")) {
    $('.ville').text("Recherche en cours...");
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/geocode/json',
      data: {
          sensor: false,
          address: $(".cp").val() + ',+FR',
          key: 'AIzaSyCNMQUXbvIC9aqjqNbg6ORQyTMflw8JskE'
      },
      success: function (data) {
          $('.ville').text(data.results[0].address_components[1].long_name);
      },
      error: function(status, text) {
        $('.ville').text("Erreur" + text);
      }
    });
  }
  else {
    $('.ville').text("Veuillez entrer un code postal valide.");
  }
})
