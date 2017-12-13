
var scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger2"
    , duration: 500
}).setPin("#pin2").addIndicators({
    name: "2 (duration: 500)"
}).addTo(controller);