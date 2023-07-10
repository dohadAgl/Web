

let baslat = document.getElementById('baslat');
let say = document.getElementById('say');
let haritam = document.getElementById('harita');
let infom = document.getElementById('infom');
let topInfo = document.getElementById('topInfo');
let durdur = document.getElementById('durulan');
let baslaulan = document.getElementById('baslaulan');

let radiuss = 0;
let radiusss = 0;


var harita = L.map('harita', {

}).setView([40.89379029959048, 28.386206559532354], 8);


var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
}).addTo(harita)





var istasyonMarker = L.icon({
    iconUrl: '/img/Frame.png',
    iconSize: [40, 40],
    iconAnchor: [20, 42],
    popupAnchor: [-3, -76],
});











var heyMan = L.icon({
    iconUrl: '/img/man.png',
    iconSize: [65, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});


let firstPoint = 0;
let lastPoint = 0;;

let marker = L.marker([40.83651945072248, 27.753156605288495]).addTo(harita);
let marker1 = L.marker([40.93328771271206, 28.231617806470723]).addTo(harita);
let marker2 = L.marker([40.87340023453396, 28.59427311182432]).addTo(harita);

marker.bindPopup("Deprem Noktası Olarak Seçin")
marker1.bindPopup("Deprem Noktası Olarak Seçin").openPopup()
marker2.bindPopup("Deprem Noktası Olarak Seçin")

var cember = L.circle([40.83651945072248, 27.753156605288495], {
    radius: 1500,
    stroke: '#ff0000',
    fillColor: 'none',
    color: '#ff0000',
    weight: 1.3

}).addTo(harita);

var cember1 = L.circle([40.83651945072248, 27.753156605288495], {
    radius: 3700,
    stroke: '#ff0000',
    fillColor: 'none',
    color: '#ff0000',
    weight: 1.3


}).addTo(harita);

var cember2 = L.circle([40.83651945072248, 27.753156605288495], {
    radius: 5900,
    stroke: '#ff0000',
    fillColor: 'none',
    color: '#ff0000',
    weight: 1.3


}).addTo(harita);

var circle11 = L.circle([40.93328771271206, 28.231617806470723], {
    radius: 1500,
    stroke: '#ff0000',
    fillColor: 'none',
    color: '#ff0000',
    weight: 1.3
}).addTo(harita);
var circle12 = L.circle([40.93328771271206, 28.231617806470723], {
    radius: 3700,
    stroke: '#ff0000',
    fillColor: 'none',
    color: '#ff0000',
    weight: 1.3
}).addTo(harita);
var circle13 = L.circle([40.93328771271206, 28.231617806470723], {
    radius: 5900,
    stroke: '#ff0000',
    fillColor: 'none',
    color: '#ff0000',
    weight: 1.3
}).addTo(harita);

var circle21 = L.circle([40.87340023453396, 28.59427311182432], {
    radius: 1500,
    stroke: '#ff0000',
    fillColor: 'none',
    color: '#ff0000',
    weight: 1.3
}).addTo(harita);
var circle22 = L.circle([40.87340023453396, 28.59427311182432], {
    radius: 3700,
    stroke: '#ff0000',
    fillColor: 'none',
    color: '#ff0000',
    weight: 1.3
}).addTo(harita);
var circle23 = L.circle([40.87340023453396, 28.59427311182432], {
    radius: 5900,
    stroke: '#ff0000',
    fillColor: 'none',
    color: '#ff0000',
    weight: 1.3
}).addTo(harita);



let istasyonOne = [41.02979878301781, 27.918663024902347]
let istasyonTwo = [41.0937904241227, 28.269882202148438]
let istasyonTheree = [41.001458987418324, 28.65371704101563]



let depremBolgesien;
let depremBolgesiboy;

let homeen;
let homeboy;
let removeMarker1;
let removeMarker2;
let deletecircle1;
let deletecircle2;
let deletecircle3;
let deletecircle11;
let deletecircle22;
let deletecircle33;

marker.on('click', (e) => {
    depremBolgesien = e.latlng.lat
    depremBolgesiboy = e.latlng.lng
    removeMarker1 = marker1
    removeMarker2 = marker2
    deletecircle1 = circle11
    deletecircle2 = circle12
    deletecircle3 = circle13
    deletecircle11 = circle21;
    deletecircle22 = circle22;
    deletecircle33 = circle23;



    marker.getPopup().setContent("Deprem Noktası Olarak Seçildi")
    setTimeout(function () {
        marker.closePopup();
    }, 3000);



    marker.setIcon(L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    }))
    marker1.setIcon(L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    }))
    marker2.setIcon(L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    }))
})

marker1.on('click', (e) => {
    depremBolgesien = e.latlng.lat
    depremBolgesiboy = e.latlng.lng
    removeMarker1 = marker
    removeMarker2 = marker2
    deletecircle1 = cember;
    deletecircle2 = cember1;
    deletecircle3 = cember2;
    deletecircle11 = circle21;
    deletecircle22 = circle22;
    deletecircle33 = circle23;

    marker1.getPopup().setContent("Deprem Noktası Olarak Seçildi")
    setTimeout(function () {
        marker1.closePopup();
    }, 3000);

    marker.setIcon(L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    }))
    marker1.setIcon(L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    }))
    marker2.setIcon(L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    }))

})

marker2.on('click', (e) => {
    depremBolgesien = e.latlng.lat
    depremBolgesiboy = e.latlng.lng
    removeMarker1 = marker1
    removeMarker2 = marker

    deletecircle1 = cember
    deletecircle2 = cember1
    deletecircle3 = cember2

    deletecircle11 = circle11
    deletecircle22 = circle12
    deletecircle33 = circle13

    marker2.getPopup().setContent("Deprem Noktası Olarak Seçildi")
    setTimeout(function () {
        marker2.closePopup();
    }, 3000);


    marker.setIcon(L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    }))
    marker1.setIcon(L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    }))
    marker2.setIcon(L.icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41]
    }))

})

var myIcon = L.icon({
    iconUrl: 'img/homeMan.png',
    iconSize: [35, 80],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});




//tekirdağ
L.marker([40.995681, 27.5854], { icon: istasyonMarker }).addTo(harita);
L.marker([40.984319, 27.955656], { icon: istasyonMarker }).addTo(harita);
L.marker([41.017753, 27.862947], { icon: istasyonMarker }).addTo(harita);

L.marker([40.911464, 27.463222], { icon: istasyonMarker }).addTo(harita);
L.marker([40.995681, 27.5854], { icon: istasyonMarker }).addTo(harita);
//tekirdağ




//istanbul
L.marker([41.019014, 28.708], { icon: istasyonMarker }).addTo(harita);

L.marker([41.053747, 28, 394467], { icon: istasyonMarker }).addTo(harita);

L.marker([41.033533, 28.478403], { icon: istasyonMarker }).addTo(harita);

L.marker([41.001247, 28.543789], { icon: istasyonMarker }).addTo(harita);

L.marker([40.975472, 28.608286], { icon: istasyonMarker }).addTo(harita);

L.marker([40.975622, 28.666303], { icon: istasyonMarker }).addTo(harita);

L.marker([41.230478, 28.491811], { icon: istasyonMarker }).addTo(harita);

L.marker([40.994059, 28.924379], { icon: istasyonMarker }).addTo(harita);

L.marker([41.062244, 28.123131], { icon: istasyonMarker }).addTo(harita);

L.marker([41.04773, 28.027311], { icon: istasyonMarker }).addTo(harita);

L.marker([41.073686, 28.209028], { icon: istasyonMarker }).addTo(harita);

L.marker([41.059166, 28.332573], { icon: istasyonMarker }).addTo(harita);

L.marker([41.059044, 28.332592], { icon: istasyonMarker }).addTo(harita);






L.marker([40.926696, 29.415474], { icon: istasyonMarker }).addTo(harita);
L.marker([40.818944, 29.279922], { icon: istasyonMarker }).addTo(harita);
L.marker([40.969499, 28.843837], { icon: istasyonMarker }).addTo(harita);
L.marker([40.98346, 28.89223], { icon: istasyonMarker }).addTo(harita);

//istanbul


var sonMarker = null;
let aktifIcon = true;
harita.on('click', (e) => {
    if(aktifIcon){
    if (sonMarker !== null) {
        harita.removeLayer(sonMarker);
    }

    homeen = e.latlng.lat
    homeboy = e.latlng.lng


    sonMarker = L.marker([homeen, homeboy], { icon: myIcon }).addTo(harita);
}
});

function kmHesapla(firsten, firstboy, lasten, lastboy) {
    firstPoint = L.latLng(firsten, firstboy)
    lastPoint = L.latLng(lasten, lastboy)
    var km = firstPoint.distanceTo(lastPoint);
    return km

}

let bolll = true;
let zaman = 0;
let sayac = 0;
async function haritaMiddle(zoom) {
    await harita.setZoom(zoom);
    harita.setView([depremBolgesien, depremBolgesiboy]);
    await harita.setZoom(zoom);
    harita.setView([depremBolgesien, depremBolgesiboy]);
}



baslat.addEventListener('click', () => {
baslat.style.display= 'none'
baslaulan.style.display ='inline-block'
durdur.style.display ='inline-block'
aktifIcon = false
    topInfo.innerHTML = '';

    var screenWidth = window.innerWidth;
    if (screenWidth < 600) {
        haritaMiddle(7);
    }
    else {
        haritaMiddle(8);
    }


    harita.removeLayer(removeMarker1);
    harita.removeLayer(removeMarker2);

    harita.removeLayer(deletecircle1);
    harita.removeLayer(deletecircle2);
    harita.removeLayer(deletecircle3);

    harita.removeLayer(deletecircle11);
    harita.removeLayer(deletecircle22);
    harita.removeLayer(deletecircle33);






    L.marker([istasyonOne[0], istasyonOne[1]], { icon: istasyonMarker }).addTo(harita);

    L.marker([istasyonTwo[0], istasyonTwo[1]], { icon: istasyonMarker }).addTo(harita);


    L.marker([istasyonTheree[0], istasyonTheree[1]], { icon: istasyonMarker }).addTo(harita);

    var circle = L.circle([depremBolgesien, depremBolgesiboy], {
        radius: 0,
        stroke: false,
        fillColor: '#ff0000',
        fillOpacity: 0.5
    }).addTo(harita);
   

 


    var circles = L.circle([depremBolgesien, depremBolgesiboy], {
        radius: 0,
        stroke: false,
        fillColor: '#191919',
        fillOpacity: 0.5
    }).addTo(harita);


    let istasyonDepremUzaklık = kmHesapla(depremBolgesien, depremBolgesiboy, istasyonOne[0], istasyonOne[1])
    let istasyonAlgılama = istasyonDepremUzaklık / 7.000//saniye hız



    let istasyonDepremUzaklık2 = kmHesapla(depremBolgesien, depremBolgesiboy, istasyonTwo[0], istasyonTwo[1])
    let istasyonAlgılama2 = istasyonDepremUzaklık2 / 7.000//saniye hız

    let istasyonDepremUzaklık3 = kmHesapla(depremBolgesien, depremBolgesiboy, istasyonTheree[0], istasyonTheree[1])
    let istasyonAlgılama3 = istasyonDepremUzaklık3 / 7.000//saniye hız

    let enYakınIstasyon = Math.min(istasyonAlgılama, istasyonAlgılama2, istasyonAlgılama3)


    let homeUzaklık = kmHesapla(depremBolgesien, depremBolgesiboy, homeen, homeboy)
    let evevarıs = homeUzaklık / 3.500
    let birkere = true
    let birkere1 = true

    function zama() {

        zaman += 1000
        if (zaman >= enYakınIstasyon && birkere) {
            console.log(zaman + "istasyon algıladı")
            birkere = false



            topInfo.innerHTML = "İSTAYON DEPREMİ ALDILADI VE ALARM GÖNDERİLDİ"
            L.marker([homeen, homeboy], { icon: heyMan }).addTo(harita);


        }
        if (zaman >= evevarıs && birkere1) {

            birkere1 = false
            topInfo.innerHTML = "TAHMİN EDİLEN BÖLGEDE BİR DERREM OLMA DURUMDA BULUNDUĞUNUZ KONUMDA DEPREMDEN " + sayac + " SN ÖNCE UYARILABİLİRSİNİZ"
        }
        if (birkere == false && birkere1 == true) {
            sayac++
            say.innerHTML = sayac

        }

    }
    setTimeout(function(label){
     label = L.marker(circle.getBounds().getNorthEast(), {
            icon: L.divIcon({
                className: 'circle-label',
                html: '<p>⇚P<b>_</b>Dalgası</p>',
                iconSize: [20, 20],
                iconAnchor: [15, -50]
    
            })
        }).addTo(harita);
        

        setInterval(function(){label.setLatLng(circle.getBounds().getNorthEast())},30)
    },3500)
   
    setTimeout(function(){
        var labels = L.marker(circles.getBounds().getSouthWest(), {
            icon: L.divIcon({
                className: 'circles-label',
                html: '<p>S<b>_</b>Dalgası⇑</p>',
                iconSize: [20, 20],
                iconAnchor: [0, 0]

            })
        }).addTo(harita);
           
   
           setInterval(function(){labels.setLatLng(circles.getBounds().getSouthWest())},60)
       },5500)

  

    function daire() {
        if (radiuss < 290000 && birkere1 == true) {
            radiuss += 220;
            circle.setRadius(radiuss);
      
                
   
   
           
        
        }
     
    }

    function daires() {
        if (radiusss < 210000 && birkere1 == true) {
            radiusss += 205;
            circles.setRadius(radiusss);
           
        }
    }
    let sayaz = setInterval(zama, 1000);

    let pdalga = setInterval(daire, 30);

    let sdalga = setInterval(daires, 60);

    function basladim() {
        sayaz =  setInterval(zama, 1000);
        pdalga = setInterval(daire, 30);
        sdalga = setInterval(daires, 60);
    }


    durdur.addEventListener('click', () => {
        clearInterval(sayaz)
        clearInterval(pdalga)
        clearInterval(sdalga)
    })

    baslaulan.addEventListener('click', () => {
        basladim();
    })


})









let garfikboy = document.getElementById('firstBox').offsetWidth;
const data = [];
const margin = { top: 40, right: 30, bottom: 30, left: 40 }
const width = garfikboy - margin.left - margin.right;
const height = 340 - margin.top - margin.bottom;

const svg = d3.select('#box').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('class', 'chart-container')
    .attr('transform', `translate(${margin.left},${margin.top})`);




var lineWidth = 0;
var lineHeight = 0;

for (var i = 0; i < 50; i++) {
    lineWidth += 20;
    svg.append('line')
        .attr('class', 'izgara')
        .attr('x1', 0)
        .attr('y1', lineWidth)
        .attr('x2', width)
        .attr('y2', lineWidth)
}
for (var i = 0; i < 50; i++) {
    lineHeight += 20;
    svg.append('line')
        .attr('class', 'izgara')
        .attr('x1', lineHeight)
        .attr('y1', 0)
        .attr('x2', lineHeight)
        .attr('y2', height)
}

let diziFinish = garfikboy / 1.3;

const y = d3.scaleLinear()
    .range([height, 0]);

const yAxis = d3.axisLeft(y)
    .tickSize(0)

svg.append('g')
    .attr('class', 'y-axis')
    .call(yAxis);

var yine = svg.append('path')

function guncelle() {
    screenWidth = window.innerWidth;

    var value = Math.random() * 100;
    data.push(value);


    y.domain([d3.min(data) - 10, d3.max(data) + 10]);
    svg.select('.y-axis').call(yAxis);

    const line = d3.line()
        .x((d, i) => (i * 1.1) + 0.4)
        .y(d => y(d))
        .curve(d3.curveCatmullRom)



    yine
        .datum(data)
        .attr('class', 'grafik')


        .attr('d', line);

    if (data.length > diziFinish) {
        data.shift()
    }


}
setInterval(guncelle, 40)
function arasira() {
    data.push(Math.floor(Math.random() * (500 - 300 + 1)) + 300);
    if (data.length > diziFinish) {
        data.shift()
    }
}
setInterval(arasira, 3000);

function arasir() {
    data.push(Math.floor(Math.random() * (-100 - (-400) + 1)) - 400);
    if (data.length > diziFinish) {
        data.shift()
    }
}
setInterval(arasir, 5000);

let yenile = document.getElementById('yenile')

yenile.addEventListener('click', () => {
    location.reload();
})




