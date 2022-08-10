fichero = open('ignore', 'r')
lineas = fichero.readlines()
exclude = ''

for linea in lineas:
	if linea.split():
	  exclude+="--exclude " + linea;

print exclude