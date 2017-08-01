;(function($) {
    "use strict";
     // Maps 
    var map;
        $(document).ready(function(){
            map = new GMaps({
                el: '#map',
                lat:37.7556077,
                lng:-122.4469759,
                zoomControl : false, 
                zoomControlOpt: {
                style : 'SMALL',
                position: 'TOP_LEFT'
            },
            panControl : false,
            streetViewControl : false, 
            mapTypeControl: false,
            scrollwheel: false,
            zoom:16,
            overviewMapControl: false, 
        });
        map.addMarker({
            lat:37.7543076,
            lng: -122.4460045,
            title: 'Jones Street',   
        });
    });
})(jQuery);