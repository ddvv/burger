$(document).ready(function(){
    var map = new ymaps.Map("map", {
            center: [55.76, 37.64], 
            zoom: 7
    });
        
});

ymaps.ready(init);
    var myMap;
    
    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.91817154482064,30.30557799999997],
            zoom: 10,
            // Изначально на карте есть только ползунок масштаба
            // и кнопка полноэкранного режима
            controls: ["zoomControl", "fullscreenControl"],
            
        });
        myMap.behaviors.disable('scrollZoom');
        var myPlacemark = new ymaps.Placemark([59.89161479955184,30.31982589428706], {}, {
            iconLayout: 'default#image',
            iconImageHref: './../img/Vector-Smart-Object.svg',
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
        });
        myMap.geoObjects.add(myPlacemark);
    }