var basket = {}; //корзина

function addListeners() {
    $(".add_to_cart").click(function() {addToBasket($(this)); });
}

function addToBasket(button) {
    //добавление товара в корзину
    id = $(button).parent().find(".el_id").val();
    title = $(button).parent().find(".el_title").val();
    price = $(button).parent().parent().find(".el_price").text();

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
    var out = "";
    for (var item in basket){
        out += '<b>' + basket[item].title + ' </b>: ' + basket[item].count+'<br/>';
    }
    $('#basket_content').html(out);
}
showMiniBasket();


$(document).ready(function(){
    if ( $.isEmptyObject(basket) ){
        //корзина пуста
        var out = '<br> <h3>Корзина пуста. Добавьте товар в корзину</h3> <br> <div class="d-grid gap-2"> <a class="btn btn-info" href="/" role="button">Каталог</a> </div>';
        $('#my-basket').html(out);
    }
    else {
    //отображение содержимого корзины
    var out ='<h1>Товары в корзине:</h1><br/>';
    for (var item in basket){
        out +=  '<div class="alert alert-info mt-2 col-md-8 offset-md-2 py-5">' +
            '<button class="delete btn btn-outline-dark" data-art"'+item+'">x</button>' +
            basket[item].title +
            basket[item].picture +
            '<button class="minus btn btn-danger" data-art"'+item+'">-</button>' +
            basket[item].count +
            '<button class="plus btn btn-success" data-art"'+item+'">+</button>' +
            basket[item].price +
            basket[item].count +
            '</div>';
        $('#my-basket').html(out);
    }
    $('.plus').on('click', plusTovar);
    $('.minus').on('click', minusTovar);
    $('.delete').on('click', deleteTovar);
    }
    function plusTovar(){
        var item = $(this).attr('data-art');
        basket[item].count++;
        saveBasketToLS();
        showMiniBasket();
    }

    function minusTovar(){
        var item = $(this).attr('data-art');
        if (basket[item]>1) {
            basket[item].count--;
        }
        else {
            delete basket[item];
        }
        saveBasketToLS();
        showMiniBasket();
    }

    function deleteTovar(){
        var item = $(this).attr('data-art');
        delete basket[item];
        saveBasketToLS();
        showMiniBasket();
    }

});

function saveBasketToLS(){
    localStorage.setItem('basket', JSON.stringify(basket));
}

