export default function contactus(){
    const content = document.querySelector('#content');

    const background = document.createElement('div');
    background.setAttribute("id","secback");

    const imagemap = document.createElement('div');
    imagemap.setAttribute("id", "imagemap");
    imagemap.innerText = 'Information';

    const imager = document.createElement('div');
    imager.setAttribute("id", "imager");
    imager.innerHTML = '<div class="placer1"><img class="imager2" src="./src/img/HILmr.png" width="700px" height="400px" border="7px"></div><div class="texter1"> Via Torino 14, Grazzano Visconti, Piacenza, Zipcode: 29020, Italy</div><div class="texter2">Contact no: 0329 1202130</div>';


    background.appendChild(imagemap);
    background.appendChild(imager);
    content.appendChild(background);
}