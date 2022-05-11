
output='output'
exclude="echo $(python build/exclude.py)";
# echo $exclude

rm -rf $output
rsync -av ./ $exclude $output 

echo $(python build/build.py index.html) > $output/index.html
echo $(python build/build.py Jspag/js.js) > $output/Jspag/js.js
echo $(python build/build.py Jspag/list.js) > $output/Jspag/list.js

echo $(python build/build.py style/cards.css) > $output/style/cards.css;
echo $(python build/build.py style/min.css) > $output/style/min.css;
echo $(python build/build.py style/style.css) > $output/style/style.css;