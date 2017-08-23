$(function(){  

    // загрузка Яндекс Карты
    
        
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

    /* function burgerSlider(){
        
        var moveSlide = function (container, slideNum){
            
            var items = container.find('.slider__item'),
                activeSlide = items.filter('.active'),
                reqItem = items.eq(slideNum),
                reqIndex = reqItem.index(),
                list = container.find('.slider__list'),
                duration = 500;
            
            if(reqItem.length){
                list.animate({
                    'left' : -reqIndex * 100 + '%'
                }, duration, function(){
                    activeSlide.removeClass('active');
                    reqItem.addClass('active');
                }); 
            }
        };
          
        $('.slider__btn').on('click', function(e){
            e.preventDefault();
            
            var elem = $(e.target),
                container = elem.closest('.slider'),
                items = $('.slider__item', container),
                activeItem = items.filter('.active'),
                existedItem, edgeItem, reqItem;
            
            if(elem.hasClass('slider__btn-next')){
                existedItem = activeItem.next();
                edgeItem = items.first();
            }
            
            if(elem.hasClass('slider__btn-prev')){
                existedItem = activeItem.prev();
                edgeItem = items.last(); 
            }
            
            reqItem = existedItem.length
                ? existedItem.index()
                : edgeItem.index();
            
            moveSlide(container, reqItem);
            
        });
    };
    burgerSlider(); */

    function teamAcco(){
        $('.team-acco').on('click', function(e){
            e.preventDefault()
          
            var elem = $(e.target),
                item = elem.parent();

            items = item.siblings();

            if(!item.hasClass('active')){
                item.addClass('active');
                items.removeClass('active');

            }
            else{
                item.removeClass('active');
            }    
 
        })
    };
    teamAcco();

    // вертикальное меню
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
                  'width' : '20rem' // установить высоту блока acco__content-text
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

    // полноэкранное меню
    function fullscreen(){
        $('.header__hamburger').on('click', function(e){
            e.preventDefault();

            $('.fullscreen-menu').addClass('visible');
        });

        $('.fullscreen-menu__close').on('click', function(e){
            e.preventDefault();

            $('.fullscreen-menu').removeClass('visible');           
        });
    };
    fullscreen();

    // One Page Scroll
    function pageScroll(){
        $('.fixed-menu__item').on('click', function(e){
            var elem = $(e.target).parent(),
                num = elem.index() + 1,
                siblings = elem.siblings();

            if(!elem.hasClass('active')){
                $.fn.fullpage.moveTo(num);
                siblings.removeClass('active');
                elem.addClass('active');
            }
        });

        $('.fixed-menu__link').on('click', function(e){
            e.preventDefault();

            var elem = $(e.target);

            //console.log(elem);
        });

        $('[data-goto]').on('click touchstart', function (e) {
            e.preventDefault();
        
            var elem = $(e.target);
            var sectionNum = parseInt(elem.attr('data-goto'));
            $.fn.fullpage.moveTo(sectionNum+1);
            $('.fullscreen-menu').removeClass('visible');

        });
    };
    pageScroll();

    
    
        


    
});
