export default function menu(){
    const content = document.querySelector('#content');

    const background = document.createElement('div');
    background.setAttribute("id","backg");

    const menuic = document.createElement('div');
    menuic.setAttribute("id", "menuicon");
    menuic.innerText = 'Menu';

    const orderitems = document.createElement('div');
    orderitems.setAttribute("id", "orderitems");

    const orderitemsholder = document.createElement('div');
    orderitemsholder.setAttribute("class", "orderitemsholder");
    
    const order1 = document.createElement('div');
    order1.setAttribute("class", "order1");
    order1.innerHTML = '<div class="placer"><img class="imager" src="./src/img/pexels-cottonbro-studio-4253128.jpg" width="400px" height="300px" border="7px"></div><div class="texter">Spicy Garlic Broccoli</div>';

    const order2 = document.createElement('div');
    order2.setAttribute("class", "order2");
    order2.innerHTML = '<div class="placer"><img class="imager" src="./src/img/pexels-dana-tentis-726000.jpg" width="400px" height="300px" border="7px"></div><div class="texter">Italian Spicy Chicken Pasta</div>';

    const order3 = document.createElement('div');
    order3.setAttribute("class", "order3");
    order3.innerHTML = '<div class="placer"><img class="imager" src="./src/img/pexels-eneida-nieves-905847.jpg" width="400px" height="300px" border="7px" padding-left="10em"></div><div class="texter">Pizza Neapolitan</div>';

    const order4 = document.createElement('div');
    order4.setAttribute("class", "order4");
    order4.innerHTML = '<div class="placer"><img class="imager" src="./src/img/pexels-engin-akyurt-1527603.jpg" width="400px" height="300px" border="7px"></div><div class="texter">Italian Meat Spagehtti</div>';

    const order5 = document.createElement('div');
    order5.setAttribute("class", "order5");
    order5.innerHTML = '<div class="placer"><img class="imager" src="./src/img/pexels-harry-dona-2412950.jpg" width="400px" height="300px" border="7px"></div><div class="texter">Italian Styled Macroni</div>';

    const order6 = document.createElement('div');
    order6.setAttribute("class", "order6");
    order6.innerHTML = '<div class="placer"><img class="imager" src="./src/img/pexels-yigithan-bal-765082.jpg" width="400px" height="300px" border="7px"></div><div class="texter">Il Gusto Special Pasta</div>';

    const order7 = document.createElement('div');
    order7.setAttribute("class", "order7");
    order7.innerHTML = '<div class="placer"><img class="imager" src="./src/img/pexels-pixelme-stock-photography-2773940(1).jpg" width="400px" height="300px" border="7px"></div><div class="texter">Paraman Cheese Pasta</div>';

    orderitemsholder.appendChild(order1);
    orderitemsholder.appendChild(order2);
    orderitemsholder.appendChild(order3);
    orderitemsholder.appendChild(order4);
    orderitemsholder.appendChild(order5);
    orderitemsholder.appendChild(order6);
    orderitemsholder.appendChild(order7);
    orderitems.appendChild(orderitemsholder);
    background.appendChild(menuic);
    background.appendChild(orderitems);
    content.appendChild(background);
}