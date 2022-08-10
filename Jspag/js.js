this.load = false;

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOMContentLoaded');

  function preload(image, url) {
    fetch(url).then(request => request.blob()).then((event) => {
      console.log(`url(${url})`);
      /* image.style.background = `url(${url})`; */
      console.log(image);
    });
  };
  preload(document.querySelector(".banner"), './images/fondos/vue.png');

  const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  loadScript('./Jspag/vue.global.prod.min.js').then((resp) => {
      console.log("Vue Script loaded and ready");

      const {createApp} = Vue;
      const application = createApp({
        data() {
          return {
            desc_presentacion,
            header,
            icons,
            load,
            loadSection: {},
            noimg: 'https://www.cronj.com/blog/wp-content/uploads/React-Hook.png'
          }
        },
        computed:{
          Portafolio() {
            let arr = portafolio.slice(0,6);
            return arr;
          }
        },
        created () {
          setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
            this.load = true;
            setTimeout(() => {
              document.querySelector(".banner").style.background = `url('./images/fondos/vue.png')`;
            }, 50);
          }, 400);

          window.addEventListener('scroll', () => {
            const a = document.querySelector('header');
            a.classList.toggle('sticky', window.scrollY > 0);
            if (scrollY > 0 && !this.loadSection[0]) this.loadSection[0] = true;
            if (scrollY > 150 && !this.loadSection[1]) this.loadSection[1] = true;
            if (scrollY > 500 && !this.loadSection[2]) this.loadSection[2] = true;
          });
        }
      });
      application.mount('#app');
  });

  const loadCss = (src) => new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.href = src;
    link.rel = 'stylesheet';
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });

  loadCss('https://fonts.googleapis.com/css?family=Poppins:300,500&amp;display=swap');
});

const toggleMenu = () => {
  const a = document.querySelector('.menuToggle');
  const b = document.querySelector('.navigation');
  a.classList.toggle('active');
  b.classList.toggle('active');
};