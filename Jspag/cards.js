(() => {
  loadResource('./style/cards.css','link');
  portafolio.map(item => {
    document.querySelector('#Portafolio .conatainer').innerHTML += `<div class="serviceBox">
    <div class="imgBox"'>
      <img loading="lazy" decoding="async" src="${item.img || noimg}" with='auto' height='auto'>
      <!-- <img loading="lazy" decoding="async" id="1" with='auto' height='auto'> -->
    </div>

    <div class="content">
      <h2>${item.Titulo}</h2>
      <p class="text">${item.parrafo}</p>
        <div class="icons">

        ${item.links[0] 
          ? `<a href="${item.links[0].link}" target="_blank"><img loading="lazy" decoding="async" src="./ico/link.svg" width="18" height="18"></a>` 
          : '' }

        ${item.links[1]
          ? `<a href="${item.links[1].link}" target="_blank"><img loading="lazy" decoding="async" src="./ico/github.svg" width="20" height="20"></a>`
          : '' }

        ${item.links[2]
          ? `<a href="${item.links[2].link}" target="_blank"><img loading="lazy" decoding="async" src="./ico/download.svg" width="20" height="20"></a>`
          : '' }

        </div>
      </div>
    </div>`
  });
})();