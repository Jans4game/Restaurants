import home from './home';
import menu from './menu';
import contactus from './contactus';

const content = document.querySelector('#content');

const topbar = document.createElement('div');
topbar.setAttribute("class", "topbarssss");

content.appendChild(topbar);

const bar = document.createElement('div');
bar.setAttribute("id", "barstab");
const bars = document.createElement('div');
bars.setAttribute("class", "barstaber1");
bars.textContent = "Il Gusto Italiano";
const barss = document.createElement('button');
barss.setAttribute("id", "barstaber2");
barss.setAttribute("class", "button1");
barss.textContent = "Home";
barss.style.color ="red";
const barsss = document.createElement('button');
barsss.setAttribute("id", "barstaber3");
barsss.textContent = "Menu";
const barssss = document.createElement('button');
barssss.setAttribute("id", "barstaber4");
barssss.textContent = "Contact us";

bar.appendChild(bars);
bar.appendChild(barss);
bar.appendChild(barsss);
bar.appendChild(barssss);

topbar.appendChild(bar);


const homebutton = document.querySelector('#barstaber2');
const menubutton = document.querySelector('#barstaber3');
const contactusbutton = document.querySelector('#barstaber4');



homebutton.addEventListener('click', homechanger);
menubutton.addEventListener('click', menuchanger);
contactusbutton.addEventListener('click', contactuschanger);



home(); 


function menuchanger(){
    content.removeChild(content.lastElementChild);
    menu();
    const colooo = document.querySelector('#barstaber2');
    colooo.style.color = 'orange';
}

function homechanger(){
    content.removeChild(content.lastElementChild);
    home();
    const colooo = document.querySelector('#barstaber2');
    colooo.style.color = "red";
}

function contactuschanger(){
    content.removeChild(content.lastElementChild);
    contactus();
    const colooo = document.querySelector('#barstaber2');
    colooo.style.color = 'orange';
}
