(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","allholder");const n=document.createElement("div");n.setAttribute("class","image1");const i=document.createElement("div");i.setAttribute("class","tabs1"),i.textContent="Benvenuti nel nostro Ristorante!";const s=document.createElement("div");s.setAttribute("class","insidertabs1"),s.textContent="Open Sunday - Thursday";const d=document.createElement("div");d.setAttribute("class","insidertabs2"),d.textContent="From 7am - 10pm";const r=document.createElement("div");r.setAttribute("class","insidertabs3"),r.innerHTML='<button id="orderbutton">Order Now</button>',n.appendChild(i),n.appendChild(s),s.appendChild(d),s.appendChild(r),t.appendChild(n);const a=document.createElement("div");a.setAttribute("class","image2");const c=document.createElement("div");c.setAttribute("class","tabs2"),c.textContent="Varieties of Cuisines!";const o=document.createElement("div");o.setAttribute("class","insidertabs11"),o.textContent="3 Star Michelin Ristorante!";const l=document.createElement("div");l.setAttribute("class","insidertabs22"),l.textContent="5 Renowned World Class Chef";const p=document.createElement("div");p.setAttribute("class","insidertabs33"),p.textContent="100+ Variety of Dishes",a.appendChild(c),a.appendChild(o),o.appendChild(l),o.appendChild(p),t.appendChild(a);const m=document.createElement("div");m.setAttribute("class","image3");const u=document.createElement("div");u.setAttribute("class","tabs3"),u.textContent="Have a taste of Luxurious Foods";const b=document.createElement("div");b.setAttribute("class","insidertabs111"),b.textContent="Assured Taste";const h=document.createElement("div");h.setAttribute("class","insidertabs222"),h.textContent="Special Reservations Available!";const v=document.createElement("div");v.setAttribute("class","insidertabs333"),v.textContent="Handpicked fresh foods",m.appendChild(u),m.appendChild(b),b.appendChild(h),b.appendChild(v),t.appendChild(m),e.appendChild(t)}const t=document.querySelector("#content"),n=document.createElement("div");n.setAttribute("class","topbarssss"),t.appendChild(n);const i=document.createElement("div");i.setAttribute("id","barstab");const s=document.createElement("div");s.setAttribute("class","barstaber1"),s.textContent="Il Gusto Italiano";const d=document.createElement("button");d.setAttribute("id","barstaber2"),d.setAttribute("class","button1"),d.textContent="Home",d.style.color="red";const r=document.createElement("button");r.setAttribute("id","barstaber3"),r.textContent="Menu";const a=document.createElement("button");a.setAttribute("id","barstaber4"),a.textContent="Contact us",i.appendChild(s),i.appendChild(d),i.appendChild(r),i.appendChild(a),n.appendChild(i);const c=document.querySelector("#barstaber2"),o=document.querySelector("#barstaber3"),l=document.querySelector("#barstaber4");c.addEventListener("click",(function(){t.removeChild(t.lastElementChild),e(),document.querySelector("#barstaber2").style.color="red"})),o.addEventListener("click",(function(){t.removeChild(t.lastElementChild),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","backg");const n=document.createElement("div");n.setAttribute("id","menuicon"),n.innerText="Menu";const i=document.createElement("div");i.setAttribute("id","orderitems");const s=document.createElement("div");s.setAttribute("class","orderitemsholder");const d=document.createElement("div");d.setAttribute("class","order1"),d.innerHTML='<div class="placer"><img class="imager" src="./src/img/pexels-cottonbro-studio-4253128.jpg" width="400px" height="300px" border="7px"></div><div class="texter">Spicy Garlic Broccoli</div>';const r=document.createElement("div");r.setAttribute("class","order2"),r.innerHTML='<div class="placer"><img class="imager" src="./src/img/pexels-dana-tentis-726000.jpg" width="400px" height="300px" border="7px"></div><div class="texter">Italian Spicy Chicken Pasta</div>';const a=document.createElement("div");a.setAttribute("class","order3"),a.innerHTML='<div class="placer"><img class="imager" src="./src/img/pexels-eneida-nieves-905847.jpg" width="400px" height="300px" border="7px" padding-left="10em"></div><div class="texter">Pizza Neapolitan</div>';const c=document.createElement("div");c.setAttribute("class","order4"),c.innerHTML='<div class="placer"><img class="imager" src="./src/img/pexels-engin-akyurt-1527603.jpg" width="400px" height="300px" border="7px"></div><div class="texter">Italian Meat Spagehtti</div>';const o=document.createElement("div");o.setAttribute("class","order5"),o.innerHTML='<div class="placer"><img class="imager" src="./src/img/pexels-harry-dona-2412950.jpg" width="400px" height="300px" border="7px"></div><div class="texter">Italian Styled Macroni</div>';const l=document.createElement("div");l.setAttribute("class","order6"),l.innerHTML='<div class="placer"><img class="imager" src="./src/img/pexels-yigithan-bal-765082.jpg" width="400px" height="300px" border="7px"></div><div class="texter">Il Gusto Special Pasta</div>';const p=document.createElement("div");p.setAttribute("class","order7"),p.innerHTML='<div class="placer"><img class="imager" src="./src/img/pexels-pixelme-stock-photography-2773940(1).jpg" width="400px" height="300px" border="7px"></div><div class="texter">Paraman Cheese Pasta</div>',s.appendChild(d),s.appendChild(r),s.appendChild(a),s.appendChild(c),s.appendChild(o),s.appendChild(l),s.appendChild(p),i.appendChild(s),t.appendChild(n),t.appendChild(i),e.appendChild(t)}(),document.querySelector("#barstaber2").style.color="orange"})),l.addEventListener("click",(function(){t.removeChild(t.lastElementChild),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","secback");const n=document.createElement("div");n.setAttribute("id","imagemap"),n.innerText="Information";const i=document.createElement("div");i.setAttribute("id","imager"),i.innerHTML='<div class="placer1"><img class="imager2" src="./src/img/HILmr.png" width="700px" height="400px" border="7px"></div><div class="texter1"> Via Torino 14, Grazzano Visconti, Piacenza, Zipcode: 29020, Italy</div><div class="texter2">Contact no: 0329 1202130</div>',t.appendChild(n),t.appendChild(i),e.appendChild(t)}(),document.querySelector("#barstaber2").style.color="orange"})),e()})();