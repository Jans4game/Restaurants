export default function home(){

    const content = document.querySelector('#content');

    const allholder = document.createElement('div');
    allholder.setAttribute("id", "allholder");

    const image1 = document.createElement('div');
    image1.setAttribute("class", "image1");

    const tabs1 = document.createElement('div');
    tabs1.setAttribute("class", "tabs1");
    tabs1.textContent = "Benvenuti nel nostro Ristorante!";

    const insidertabs1 = document.createElement('div');
    insidertabs1.setAttribute("class", "insidertabs1");
    insidertabs1.textContent = "Open Sunday - Thursday";

    const insidertabs2 = document.createElement('div');
    insidertabs2.setAttribute("class", "insidertabs2");
    insidertabs2.textContent = "From 7am - 10pm";

    const insidertabs3 = document.createElement('div');
    insidertabs3.setAttribute("class", "insidertabs3");
    insidertabs3.innerHTML = `<button id="orderbutton">Order Now</button>`;

    image1.appendChild(tabs1);
    image1.appendChild(insidertabs1);
    insidertabs1.appendChild(insidertabs2);
    insidertabs1.appendChild(insidertabs3);
    allholder.appendChild(image1);




    const image2 = document.createElement('div');
    image2.setAttribute("class", "image2");

    const tabs2 = document.createElement('div');
    tabs2.setAttribute("class", "tabs2");
    tabs2.textContent = "Varieties of Cuisines!";

    const insidertabs11 = document.createElement('div');
    insidertabs11.setAttribute("class", "insidertabs11");
    insidertabs11.textContent = "3 Star Michelin Ristorante!";

    const insidertabs22 = document.createElement('div');
    insidertabs22.setAttribute("class", "insidertabs22");
    insidertabs22.textContent = "5 Renowned World Class Chef";

    const insidertabs33 = document.createElement('div');
    insidertabs33.setAttribute("class", "insidertabs33");
    insidertabs33.textContent = "100+ Variety of Dishes";

    image2.appendChild(tabs2);
    image2.appendChild(insidertabs11);
    insidertabs11.appendChild(insidertabs22);
    insidertabs11.appendChild(insidertabs33);
    allholder.appendChild(image2);







    const image3 = document.createElement('div');
    image3.setAttribute("class", "image3");

    const tabs3 = document.createElement('div');
    tabs3.setAttribute("class", "tabs3");
    tabs3.textContent = "Have a taste of Luxurious Foods";

    const insidertabs111 = document.createElement('div');
    insidertabs111.setAttribute("class", "insidertabs111");
    insidertabs111.textContent = "Assured Taste";

    const insidertabs222 = document.createElement('div');
    insidertabs222.setAttribute("class", "insidertabs222");
    insidertabs222.textContent = "Special Reservations Available!";

    const insidertabs333 = document.createElement('div');
    insidertabs333.setAttribute("class", "insidertabs333");
    insidertabs333.textContent = "Handpicked fresh foods";

    image3.appendChild(tabs3);
    image3.appendChild(insidertabs111);
    insidertabs111.appendChild(insidertabs222);
    insidertabs111.appendChild(insidertabs333);

    allholder.appendChild(image3);

    content.appendChild(allholder);
}