import sys
fichero = open(sys.argv[1], 'r')

# print sys.argv[1] # prints var1

lineas = fichero.readlines()
datos = ''

if (sys.argv[1].find('.asdasdasd') == -1):
	for linea in lineas:
	    datos+= linea.strip();
else:
	for linea in lineas:
		if (linea.find('/*') == -1):
		  datos+= linea.strip();
			# print linea;

print datos