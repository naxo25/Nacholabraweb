const {createApp} = Vue;
const application = createApp({
  data() {
    return {
      desc_presentacion,
      header,
      icons,
      load: false,
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
  mounted () {
    window.addEventListener('scroll', () => {
      const a = document.querySelector('header');
      a.classList.toggle('sticky', window.scrollY > 0);
      if (scrollY > 0 && !this.loadSection[0]) this.loadSection[0] = true;
      if (scrollY > 150 && !this.loadSection[1]) this.loadSection[1] = true;
      if (scrollY > 500 && !this.loadSection[2]) this.loadSection[2] = true;
    });
    document.addEventListener("DOMContentLoaded", () => {
      this.load = true;
      console.log('DOMContentLoaded ready');
    })
  }
});
application.mount('#app')