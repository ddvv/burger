
var submitForm = function (ev) {
    ev.preventDefault();
    // console.log(ev);

    var form = $(ev.target);
        
    var request = ajaxForm(form);

    request.done(function(msg) {
        var mes = msg.mes,
            status = msg.status;
        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }
    });

    request.fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}

var ajaxForm = function (form) {

    var url = form.attr('action'),
        data = form.serialize();

    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

}

$('#order-form').on('submit', submitForm);
/*
var validator = function(){
    
    
    var checkData = function(form){
        var flag = true,
            fields = form.querySelectorAll('input, textarea');
        
            fields.forEach(function(item, i){
                if(item.value == ''){
                    showError(item);
                    flag = false;
                }
            });

        return flag;
    };

    var showError = function(field){
        field.classList.add('error');
        $(field).qtip({
            overwrite: false,
            content: field.getAttribute('data-error'),
            show: {
                event: event.type,
                ready: true
            }
        }, event);
    };

    return {
        init: function(form){
            checkData(form);
        }
    }
};

var submitForm = function(e){
    e.preventDefault();

    validator().init(this);

    var form = $(e.target),
        url = form.attr('action'),
        data = form.serialize();

    var request = $.ajax({
        type: 'POST',
        url: url,
        data: data,
        dataType: 'JSON'
    });

    request.done(function(msg){
        var mes = msg.mes,
            status = msg.status;
        if(status === 'OK'){
            form.append('<p class="success">' + mes + '</p>');
        }
        else{
            form.append('<p class="error">' + mes + '</p>');
        }
    });

    request.fail(function(jqXHR, textStatus){
        //alert('Request failed: ' + textStatus);     
    });
};

$('#order-form').on('submit', submitForm);

*/