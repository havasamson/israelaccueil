//contact google map

var Latitude = 23.803502,
    Longitude = 90.370033; // These are the values for your desired longitude and latitude

if ($("#googleMap").length > 0) {
    var myCenter = new google.maps.LatLng(Latitude, Longitude);

    var map = new google.maps.Map(document.getElementById("googleMap"), {
        center: myCenter,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        styles: [{
            "featureType": "all",

        }]
    });


}
