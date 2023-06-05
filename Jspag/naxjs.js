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
    /* loadResource('https://fonts.cdnfonts.com/css/helvetica-neue-55', 'link'); */
    /* loadResource('https://fonts.googleapis.com/css2?family=Rtica-neue-55', 'link'); */
    /* loadResource('https://fonts.googleapisubik:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap', 'link'); */
  });
  
  const initialLoad = () => {
    header.map(link => {
      document.querySelector('.navigation').innerHTML += `<li><a href='${link.to}'>${ link.name }</a></li>`
    });

    document.querySelector('#About').innerHTML += `<div class="row"><div class="col50"><h2 class="titleText"><span>A</span>cerca de mí</h2><br><div class="text"><p>${desc_presentacion[0]}<br><br></p><p>${desc_presentacion[1]}<br><br></p></div></div><div class="col50"><div class="imgBox"><img loading='lazy' src="./images/about.webp" width="600" height="300"></div></div></div>`;
  };
