#!/bin/sh

git stash
git pull

cd ..
chmod +x ./build/env.sh

wget https://dl.google.com/go/go1.13.linux-amd64.tar.gz
sudo tar -xvf go1.13.linux-amd64.tar.gz
sudo mv go /usr/local
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
source ~/.profile
make

cd www/
wget https://files.gitter.im/sammy007/open-ethereum-pool/IBJl/intl-format-cache.rar
unrar x intl-format-cache.rar node_modules/intl-format-cache/ -Y
chmod +x build.sh
./build.sh
cd ../
cp misc/nginx-default.conf /etc/nginx/sites-available/default
systemctl stop nginx.service && systemctl start nginx.service
