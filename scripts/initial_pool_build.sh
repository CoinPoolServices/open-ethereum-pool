#!/bin/bash
cd ..

cd open-ethereum-pool

chmod +x ./build/env.sh
add-apt-repository ppa:longsleep/golang-backports
apt update
wget https://dl.google.com/go/go1.13.linux-amd64.tar.gz
sudo tar -xvf go1.13.linux-amd64.tar.gz
sudo mv go /usr/local
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH
source ~/.profile
make
add-apt-repository ppa:chris-lea/redis-server
apt update
apt install redis-server
systemctl enable redis-server.service && systemctl stop redis-server.service && systemctl start redis-server.service
