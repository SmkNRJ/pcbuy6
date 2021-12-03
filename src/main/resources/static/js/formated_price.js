(function() {
    var priceSet;

    priceSet = function (data) {
        /*
         * В переменной price приводим получаемую переменную в нужный вид:
         * 1. принудительно приводим тип в число с плавающей точкой,
         *    учли результат 'NAN' то по умолчанию 0
         * 2. фиксируем, что после точки только в сотых долях
         */
        var price = Number.prototype.toFixed.call(parseFloat(data) || 0, 2),
            //заменяем точку на запятую
            price_sep = price.replace(/(\D)/g, ","),
            //добавляем пробел как разделитель в целых
            price_sep = price_sep.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

        return price_sep + ' руб.';
    };
});