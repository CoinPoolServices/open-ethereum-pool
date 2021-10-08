#!/bin/sh

git stash
git pull

cd ..
chmod +x ./build/env.sh
wget https://dl.google.com/go/go1.13.linux-amd64.tar.gz
sudo tar -xvf go1.13.linux-amd64.tar.gz
sudo rm -rf go1.13.linux-amd64.tar.gz
sudo rm -rf /usr/local/go
sudo mv go /usr/local
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
source ~/.profile
make