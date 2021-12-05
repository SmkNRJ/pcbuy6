var basket = {}; //корзина

function addListeners() {
    $(".add_to_cart").click(function() {addToBasket($(this)); });
}

function addToBasket(button) {
    //добавление товара в корзину
    id = $(button).parent().find(".el_id").val();
    title = $(button).parent().find(".el_title").val();
    price = $(button).parents().find(".tovar").children("small")/*.children("p")*/.find(".el_price").text();

    if (basket[id] !=undefined){
        basket[id].count++;
    }
    else {
        basket[id] ={ count:1 }
    }
    basket[id].title = title;
    basket[id].price = price;
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


$(document).ready(function(){
    //отображение содержимого корзины
    var out ='Товары в корзине:<br/>';
    for (var item in basket){
        out +=  '<div class="alert alert-info mt-2 col-md-8 offset-md-2 py-5">' + '<button className="delete">x</button>' + basket[item].title + basket[item].picture + '<button class="minus">-</button>' + basket[item].count + '<button class="plus">+</button>' + basket[item].price + basket[item].count + '</div>';
        $('#my-basket').html(out);
    }

});

