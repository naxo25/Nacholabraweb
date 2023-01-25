# echo $(python build/build.py style/cards.css) 
# echo $(python build/build.py style/min.css)
# echo $(python build/build.py style/style.css)


#!/bin/bash

array=( one two three )
for i in "${array[@]}"
do
	echo "$i"
done