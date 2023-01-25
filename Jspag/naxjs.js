  const toggleMenu = () => {
    const a = document.querySelector('.menuToggle');
    const b = document.querySelector('.navigation');
    a.classList.toggle('active');
    b.classList.toggle('active');
  };

  const preload = (image, url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('get', url);
      xhr.responseType = "blob";
      xhr.onloadend = (e) => {
        console.log('Obtener response de imagen.');

        resolve(xhr.response);

        if (xhr.status === 200) {
          resolve(xhr.response)
        } else {
          reject("Loading error:" + xhr.statusText)
        };
        /* image.style.background = `url(${url})`; */
      };

      xhr.onprogress = (e) => console.log('Progreso: ' + e.loaded);
      xhr.onloadstart = (e) => console.log('Descargar imagen', url);
      xhr.send();
    })
  };

/*
  const preload = (image, url) => {
    Jspag//js.js Jspag//list.js Jspag//naxjs.js build//build.py build//build.sh build//exclude.py build//test.sh ico//download.svg ico//github.png ico//github.svg ico//link.svg ico//linkedin-brands.svg ico//linkedin.svg ico//youtube.svg images//App images//about.png images//fondos images//footer.webp images//ico.png images//icos.png images//iga.png images//menu images//quotes.svg node_modules//servor output//Jspag output//ico output//images output//index.html output//style style//about.css style//cards.css style//contact.css style//loader.css style//menu-cel.css style//style.css fetch(url).then(request => request.blob()).then((event) => { Jspag//js.js Jspag//list.js Jspag//naxjs.js build//build.py build//build.sh build//exclude.py build//test.sh ico//download.svg ico//github.png ico//github.svg ico//link.svg ico//linkedin-brands.svg ico//linkedin.svg ico//youtube.svg images//App images//about.png images//fondos images//footer.webp images//ico.png images//icos.png images//iga.png images//menu images//quotes.svg node_modules//servor output//Jspag output//ico output//images output//index.html output//style style//about.css style//cards.css style//contact.css style//loader.css style//menu-cel.css style//style.css console.log(event.size); Jspag//js.js Jspag//list.js Jspag//naxjs.js build//build.py build//build.sh build//exclude.py build//test.sh ico//download.svg ico//github.png ico//github.svg ico//link.svg ico//linkedin-brands.svg ico//linkedin.svg ico//youtube.svg images//App images//about.png images//fondos images//footer.webp images//ico.png images//icos.png images//iga.png images//menu images//quotes.svg node_modules//servor output//Jspag output//ico output//images output//index.html output//style style//about.css style//cards.css style//contact.css style//loader.css style//menu-cel.css style//style.css console.log(event.slice()); Jspag//js.js Jspag//list.js Jspag//naxjs.js build//build.py build//build.sh build//exclude.py build//test.sh ico//download.svg ico//github.png ico//github.svg ico//link.svg ico//linkedin-brands.svg ico//linkedin.svg ico//youtube.svg images//App images//about.png images//fondos images//footer.webp images//ico.png images//icos.png images//iga.png images//menu images//quotes.svg node_modules//servor output//Jspag output//ico output//images output//index.html output//style style//about.css style//cards.css style//contact.css style//loader.css style//menu-cel.css style//style.css image.decoding = "async"; Jspag//js.js Jspag//list.js Jspag//naxjs.js build//build.py build//build.sh build//exclude.py build//test.sh ico//download.svg ico//github.png ico//github.svg ico//link.svg ico//linkedin-brands.svg ico//linkedin.svg ico//youtube.svg images//App images//about.png images//fondos images//footer.webp images//ico.png images//icos.png images//iga.png images//menu images//quotes.svg node_modules//servor output//Jspag output//ico output//images output//index.html output//style style//about.css style//cards.css style//contact.css style//loader.css style//menu-cel.css style//style.css image.style.background = `url(${url})`;
    Jspag//js.js Jspag//list.js Jspag//naxjs.js build//build.py build//build.sh build//exclude.py build//test.sh ico//download.svg ico//github.png ico//github.svg ico//link.svg ico//linkedin-brands.svg ico//linkedin.svg ico//youtube.svg images//App images//about.png images//fondos images//footer.webp images//ico.png images//icos.png images//iga.png images//menu images//quotes.svg node_modules//servor output//Jspag output//ico output//images output//index.html output//style style//about.css style//cards.css style//contact.css style//loader.css style//menu-cel.css style//style.css }) Jspag//js.js Jspag//list.js Jspag//naxjs.js build//build.py build//build.sh build//exclude.py build//test.sh ico//download.svg ico//github.png ico//github.svg ico//link.svg ico//linkedin-brands.svg ico//linkedin.svg ico//youtube.svg images//App images//about.png images//fondos images//footer.webp images//ico.png images//icos.png images//iga.png images//menu images//quotes.svg node_modules//servor output//Jspag output//ico output//images output//index.html output//style style//about.css style//cards.css style//contact.css style//loader.css style//menu-cel.css style//style.css 
  };
*/

  const loadResource = (src, type) => new Promise((resolve, reject) => {
    const resource = document.createElement(type);
    resource.src = src;

    if (type === 'link') {
      resource.href = src;
      resource.rel = 'stylesheet';
    };

    resource.onload = resolve;
    resource.onerror = reject;

    document.head.appendChild(resource);
  });

  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
  /* const InitiallyHiddenElement = document.querySelector('.serviceBox') Jspag//js.js Jspag//list.js Jspag//naxjs.js build//build.py build//build.sh build//exclude.py build//test.sh ico//download.svg ico//github.png ico//github.svg ico//link.svg ico//linkedin-brands.svg ico//linkedin.svg ico//youtube.svg images//App images//about.png images//fondos images//footer.webp images//ico.png images//icos.png images//iga.png images//menu images//quotes.svg node_modules//servor output//Jspag output//ico output//images output//index.html output//style style//about.css style//cards.css style//contact.css style//loader.css style//menu-cel.css style//style.css console.log(InitiallyHiddenElement.getAttribute('nax-for')) Jspag//js.js Jspag//list.js Jspag//naxjs.js build//build.py build//build.sh build//exclude.py build//test.sh ico//download.svg ico//github.png ico//github.svg ico//link.svg ico//linkedin-brands.svg ico//linkedin.svg ico//youtube.svg images//App images//about.png images//fondos images//footer.webp images//ico.png images//icos.png images//iga.png images//menu images//quotes.svg node_modules//servor output//Jspag output//ico output//images output//index.html output//style style//about.css style//cards.css style//contact.css style//loader.css style//menu-cel.css style//style.css items = []; */

    initialLoad();
    let loadCards, loadIcons;

    if (window.outerWidth < 991)
      loadResource('./style/menu-cel.css','link');

    window.addEventListener('scroll', () => {
      const a = document.querySelector('header');

      a.classList.toggle('sticky', window.scrollY > 0);

      if (!loadCards && window.scrollY > 600) {
        loadResource('./Jspag/cards.js','script');
        loadCards = true;
      }

      if (!loadIcons && window.scrollY > 1400) {
        loadResource('./Jspag/footer.js','script');
        loadIcons = true;
      }
    });
  });

  window.addEventListener('load', () => {
    console.log('La página ha terminado de cargarse!!');
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('#app').style.opacity = '1';
    /* preload(document.querySelector(".banner"), location.hostimages/fondos/vue.png') */
    preload(document.querySelector(".banner"), './images/fondos/vue.png').then(blob => {
      console.log('Cargar imagen blob en DOM.');
      document.querySelector(".banner").style.background = `url(${URL.createObjectURL(blob)})`;
      document.querySelector(".banner").style.backgroundAttachment = 'fixed';
    });

    /* document.querySelector(".banner").style.background = 'url(./images/fondos/vue.png)'; */
    loadResource('https://fonts.googleapis.com/css?family=Poppins:300,500&amp; display=swap','link');
  });
  
  const initialLoad = () => {
    header.map(link => {
      document.querySelector('.navigation').innerHTML += `<li><a href='${link.to}'>${ link.name }</a></li>`
    });

    document.querySelector('#About').innerHTML += `<div class="row"><div class="col50"><h2 class="titleText"><span>A</span>cerca de mí</h2><br><div class="text"><p>${desc_presentacion[0]}<br><br></p><p>${desc_presentacion[1]}<br><br></p></div></div><div class="col50"><div class="imgBox"><img loading='lazy' src="./images/about.png" width="600" height="300"></div></div></div>`;
  };
