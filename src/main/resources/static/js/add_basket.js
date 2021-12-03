var basket = {}; //корзина

function add_to_basket(){
    $(button.add_to_cart).on('click', addToBasket);
}

function addToBasket() {
    //добавление товара в корзину
    var title = $(this).attr('id');
    if (basket[title] !=undefined){
        basket[title]++;
    }
    else {
        basket[title] = 1;
    }
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
    var out ='';
    for (var w in basket){
        out += w + ' --- '+basket[w]+'<br>';
    }
    $('#mini-basket').html(out);
}
showMiniBasket();

