const {createApp} = Vue;
const application = createApp({
  data() {
    return {
      desc_presentacion,
      header,
      icons,
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
      scrollY > 100 ? this.load = true : '';
    })
  }
});
application.mount('#app')