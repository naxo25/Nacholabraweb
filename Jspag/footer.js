(() => {
  loadResource('./style/footer.css','link');
  icons.map(icon => {
    document.querySelector('#Redes .icons').innerHTML += `<div class=icon>
      <a href="${icon.href}" target="_blank">
        <img loading="lazy" decoding="async" src="./ico/${icon.ico}" width="25" height='25'>
      </a>
    </div>`
  })
})();