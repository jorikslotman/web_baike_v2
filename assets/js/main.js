(function($) {
    $(document).ready(function(){
        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);

        $('#over_image').hide();
        $("#under_image").mouseenter(function() {
                   $("#over_image").fadeIn('slow');
        });
        $("#over_image").mouseleave(function() {
                   $("#over_image").fadeOut('slow')
        });
        $('#fade_in').fadeIn('slow');


    });

    window.onload = function() {
        $('#hide_onload').show();
          scrolly();

          getElementById("hide_onload").style.display = "inline";
       };




})(jQuery);


