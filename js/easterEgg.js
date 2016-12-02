/**
 * Created by PierreRainero on 02/12/2016.
 */

(function($) {
    $(document).ready(function(){
        var nombreClik = 0;

        $("#pourquoi").click(function () {
            nombreClik++;
            if(nombreClik==9) {
                var evt = document.createEvent("MouseEvents");
                evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                document.getElementById("esaterEgg").dispatchEvent(evt);
            }
        })
    });
})(jQuery);