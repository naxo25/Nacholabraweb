
output='dist'
exclude=$(python build/exclude.py);

# build
rm -rf $output
rsync -a ./ $exclude $output 

echo $(python build/build.py index.html) > $output/index.html

# echo $(python build/build.py Jspag/js.js) > $output/Jspag/js.js
echo $(python build/build.py Jspag/list.js) > $output/Jspag/list.js
echo $(python build/build.py Jspag/naxjs.js) > $output/Jspag/naxjs.js
echo $(python build/build.py Jspag/cards.js) > $output/Jspag/cards.js
echo $(python build/build.py Jspag/footer.js) > $output/Jspag/footer.js

echo $(python build/build.py style/cards.css) > $output/style/cards.css;
echo $(python build/build.py style/menu-cel.css) > $output/style/menu-cel.css;
echo $(python build/build.py style/footer.css) > $output/style/footer.css;
echo $(python build/build.py style/style.css) > $output/style/style.css;
echo $(python build/build.py style/loader.css) > $output/style/loader.css;

echo 'Build creada en' $output