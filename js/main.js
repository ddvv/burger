$(function(){  

    // загрузка Яндекс Карты
    function contactsMap(){
        
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
                iconImageHref: './../img/placemark.svg',
                iconImageSize: [30, 42],
                iconImageOffset: [-3, -42]
            });
            myMap.geoObjects.add(myPlacemark);
        };
    };    
    contactsMap();


    function menuAcco(){
        $(function(){
            $('.menu-acco__trigger').on('click', function(e){
              e.preventDefault()
              
              var elem = $(e.target), // куда нажали
                  item = elem.closest('.menu-acco__item'), // на какую именно нажали
                  content = item.find('.menu-acco__content'), // найти блок с контентом
                  reqHeight = item.find('.menu-acco__text').outerWidth(), // получить высоту блока
                  items = item.siblings(),
                  otherContent = items.find('.menu-acco__content') // получить остальные элементы
                  
              
              if(!item.hasClass('active')){ // если нет класса active у элемента
                items.removeClass('active'); // обнуление высоты всех элементов
                item.addClass('active'); // добавить класс active, выбранному элементу  
                
                otherContent.css({
                  'width' : 0 // обнулить высоту блока
                })
                
                content.css({
                  'width' : '100%' // установить высоту блока acco__content-text
                })
              }
              else{
                item.removeClass('active'); // удалить класс active, выбранному элементу  
                content.css({
                  'width' : 0 // обнулить высоту блока
                })
              } 
              
              
            })
          });
    };
    menuAcco();
});
