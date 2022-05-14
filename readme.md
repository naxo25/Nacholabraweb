## Nacholabraweb

Mi sitio web hecho con configuraciones propias desde cero usando la librería vueJs, css propio y scripts que hice en python para minificar el código. La idea es ir incorporando lo que se me ocurra (imageresizer, tests, eslint, precaching, etc).

https://nacholabraweb.000webhostapp.com/


## Setup

``` bash
# install dependencies
yarn

# serve with servor hot reload at localhost:8080
yarn dev

# build for production with python minification
yarn build
```

# Historial

Para poder tener listo lo más rapido posible el DOM realize las siguientes configuraciones.

### Javascript

Archivos pesados se cargan a través de promesas.

	new Promise((resolve, reject) => {
	  const script = document.createElement('script');
	  script.src = 'https://vue.global.prod.min.js';
	  script.onload = resolve;
	  script.onerror = reject;
	  document.head.appendChild(script);
	});

### Colas de css criticos

Uso de preload y prefetch para cargar recursos sin bloquear el dom.

	<link rel="preload" href="./style/min.css" as="style">
	<link rel="stylesheet" type="text/css" href="./style/cards.css">

https://web.dev/defer-non-critical-css/

### Precarga de imágenes con js

	function preload(image, url) {
	  fetch(url).then(request => request.blob()).then(() => {
	    image.src = url;
	  });
	}

https://deployando.net/2020/01/21/precargar-imagenes-javascript/


### Herramientas usadas
* VueJs
* servor para servidor estático.
* https://pagespeed.web.dev/ para métricas de rendimiento.

### Recursos
* https://imageresizer.com/ para reducir tamaño de imágenes.
* https://loading.io/css/ logos.


### Requisitos para build 📋
* Python


## Github 📌

Uso de [GIT](https://git-scm.com/) para control de versiones.
Puedes ver los comandos que uso [aquí](https://nacholabraweb.000webhostapp.com/Tutoriales#/Github).


## Licencia 📄

Desarrollado por Ignacio Labra