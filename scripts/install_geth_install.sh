#!/bin/sh

sudo su &&
mkdir /pool && cd /pool &&
wget https://github.com/multi-geth/multi-geth/releases/download/v1.9.21/multi-geth-linux.zip &&
unzip multi-geth-linux.zip &&
ln -s /pool/geth /usr/bin/geth &&
chmod ugo+x /usr/bin/geth