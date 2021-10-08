#!/bin/sh

git stash
git pull

cd ..

cd www/
wget https://files.gitter.im/sammy007/open-ethereum-pool/IBJl/intl-format-cache.rar
unrar x intl-format-cache.rar node_modules/intl-format-cache/ -Y
chmod +x build.sh
./build.sh
cd ../
cp misc/nginx-default.conf /etc/nginx/sites-available/default
systemctl stop nginx.service && systemctl start nginx.service
