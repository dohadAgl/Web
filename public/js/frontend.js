let bars = document.getElementById('small-menu-icon');
let smallNav = document.getElementsByClassName('mobil-nav')[0];

smallNav.style.transform = 'translateY(-120%)'

document.addEventListener('click', (e)=>{
   
    if(e.composedPath().includes(smallNav)){
        console.log('iççine tıkladın');
    }
    else{

       if(e.composedPath().includes(bars)){
        if (smallNav.style.transform === 'translateY(-120%)') {
            smallNav.style.transform = 'translateY(10%)';
            x = true
            }
            else{
             smallNav.style.transform = 'translateY(-120%)';
             smallNav.classList.remove('smallNavGonder');
             smallNav.classList.add('mobil-nav');
            }
            
       }
       else{
        smallNav.style.transform = 'translateY(-120%)';
        smallNav.classList.remove('smallNavGonder');
        smallNav.classList.add('mobil-nav');
       }

    }
    })

let Navsearch = document.getElementById('nav-search')
let searchBox = document.getElementById('search')
let searchBtn = document.getElementById('searchBtn')


searchBtn.addEventListener('click',()=>{
    searchBox.style.transform ='translateY(-220%)';
})
Navsearch.addEventListener('click',()=>{
    searchBox.style.transform ='translateY(12%)';
})


//anasayfadaki infografik tıklandığında tam ekran gösterme
const image = document.querySelector('img[data-enlargable]');
    

image.classList.add('img-enlargable');
image.addEventListener('click', () => {
    const src = image.getAttribute('src');
    const overlay = document.createElement('div');
    overlay.style.background = `RGBA(0, 0, 0, .9) url(${src}) no-repeat center`;
    overlay.style.backgroundSize = 'contain';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.position = 'fixed';
    overlay.style.zIndex = '10000';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.cursor = 'zoom-out';
    overlay.addEventListener('click', () => {
        overlay.remove();
    });
    document.body.appendChild(overlay);
});


