var basket = {}; //корзина

function addListeners() {
    $(".add_to_cart").click(function() {addToBasket($(this)); });
}

function addToBasket(button) {
    //добавление товара в корзину
    id = $(button).parent().find(".el_id").val();
    title = $(button).parent().find(".el_title").val();

    if (basket[id] !=undefined){
        basket[id].count++;
    }
    else {
        basket[id] ={ count:1 }
    }
    basket[id].title = title;
    localStorage.setItem('basket', JSON.stringify(basket));
    //console.log(title);
    showMiniBasket();
}

function checkBasket(){
    //проверка корзины в localStorage
    if (localStorage.getItem('basket') != null){
        basket = JSON.parse(localStorage.getItem('basket'));
    }
}
checkBasket();

function showMiniBasket(){
    //отображение содержимого корзины
    var out ='Товары в корзине:<br/>';
    for (var item in basket){
        out +=  basket[item].title + ' --- ' + basket[item].count+'<br/>';
    }
    $('#mini-basket').html(out);
}
showMiniBasket();


$.getJSON('catalog.html'), function(data) {
    var catalog = data;
    checkBasket();
    showBasket();

    function showBasket(){
        //отображение содержимого корзины
        var out ='Товары в корзине:<br/>';
        for (var item in basket){
            out +=  '<button class="delete">x</button>';
            out +=  basket[item].title; //название
            out +=  basket[item].picture; //картинка
            out +=  '<button class="minus">-</button>';
            out +=  basket[item].count; //количество
            out +=  '<button class="plus">+</button>';
            out +=  basket[item].price * basket[item].count; //сумма


        }
        $('#my-basket').html(out);
    }
}

