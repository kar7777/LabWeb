//Agregar Comentarios
$("#todo-form").submit(function (e) {
    var d = new Date($.now());
    const output = `
    <li class="collection-item">
          <div>${$("#todo").val()+"<br>"+'<a style="font-size=3px;">'+"Comentario hecho el "+ d.toLocaleDateString() +" a las "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds() +"</a>"}
            <a href="#!" class="secondary-content delete">
              <i class="material-icons red-text">close</i>
            </a>
          </div>
        </li>`;
    $(".todos").append(output);
    Materialize.toast("Comentario Añadido!", 3000,"rounded");
    $("#todo").val("");
    initmap();
    e.preventDefault();
  });

  // Borrar Comentarios 
$(".todos").on("click", ".delete", function (e) {
    $(this).parent().parent().remove();
    Materialize.toast("Comentario Eliminado!", 3000,"rounded");
    e.preventDefault();
  });

//Cambiar Fondo
$("#boton").click(function(){
    var classes = ['clase1','clase2','clase3'];
    $('body').each(function(){
      this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
    });
});

function initmap(){
    map = new google.maps.Map(document.getElementById('mapa'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 10
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        var marker = new google.maps.Marker({
            position: pos,
            map: map,
            title: "Tu comentario fue hecho aqui!"
          });
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  
}
