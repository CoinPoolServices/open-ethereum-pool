### Building on Linux

Dependencies:

    apt install software-properties-common unzip nginx tor pcscd pcsc-tools git curl htop mc unrar screen

**I highly recommend to use Ubuntu 18.04.4 LTS.**


Geth setup:
    Always make sure you are running the most current release from https://geth.ethereum.org/downloads/

    sudo su
    mkdir /pool && cd /pool
    wget https://gethstore.blob.core.windows.net/builds/geth-linux-amd64-1.10.9-eae3b194.tar.gz
    tar -xf https://gethstore.blob.core.windows.net/builds/geth-linux-amd64-1.10.9-eae3b194.tar.gz
    cd geth-linux-amd64-1.10.9-eae3b194
    mv geth /pool/
    cd ..
    rm -rf geth-linux-amd64-1.10.9-eae3b194
    rm -rf geth-linux-amd64-1.10.9-eae3b194.tar.gz
    ln -s /pool/geth /usr/bin/geth
    chmod ugo+x /usr/bin/geth

    
    Run the below commands for generating a new account in GETH.

    geth account new
    geth account list

example output:

Public address of the key: 0xa9c96bff41FFAFb6bE8c2990c0CF4F3b220aaEaa
Path of the secret key file: /root/.ethereum/keystore/UTC--2020-03-11T22-03-07.512690005Z--a9c96bff41ffafb6be8c2990c0cf4f3b220aaeaa

Create geth start script:
    If you are wanting to run a ETC (Ethereum Classic) node use below script.

    nano /pool/start_geth.sh

    ```
    #!/bin/bash
    screen -S server geth --classic --rpc --maxpeers 75 --syncmode "fast" --rpcapi "eth,net,web3,personal" --etherbase "YOUR_WALLET" --cache=12288 --mine --unlock "YOUR_WALLET" --allow-insecure-unlock --password /pool/pwd
    ```
    If you are wanting to run a ETH (Ethereum) node use below script.

    nano /pool/start_geth.sh

    ```
    #!/bin/bash
    screen -S server geth --http --maxpeers 75 --syncmode "fast" --http.api "eth,net,web3,personal" --miner.etherbase "YOUR_WALLET" --cache=12288 --mine --unlock "YOUR_WALLET" --allow-insecure-unlock --password /pool/pwd
    ```

Enter wallet password to the file: 
    
    nano /pool/pwd

    chmod +x /pool/start_geth.sh

Start blockchain sync:

    ./start_geth.sh

In new console window run this commands:

    sudo su
    cd /pool
    git config --global http.https://gopkg.in.followRedirects true
    git clone https://github.com/CoinPoolServices/open-ethereum-pool.git
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

    apt-get update; apt-get install libgnutls30
    sudo apt-get install -y nodejs
    sudo apt-get update && sudo apt-get install yarn
    curl -sL https://deb.nodesource.com/setup_14.x | bash -
    curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

    apt update
    apt install nodejs yarn


### Building Frontend

    cd www/
    
Change 192.168.0.200 to your IP or DNS in file environment.js:
    
    nano config/environment.js

Then run this commands:

    sudo npm install -g ember-cli@2.9.1
    sudo npm install -g bower
    sudo npm install fsevents@latest -f --save-optional
    sudo npm install intl-format-cache@4.2.22
    sudo npm install format-number
    sudo npm install ember-cli-accounting
    sudo npm install core-js@3.6.4
    sudo npm install jquery@3.4.0
    sudo npm install @babel/core@^7.0.0-beta.42
    sudo npm install babel-plugin-debug-macros@0.2.0
    sudo npm install ember-intl@4.3.0
    sudo npm install minimatch@3.0.2
    sudo npm install ember-cli-babel@7.18.0
    sudo npm install ember-resolver@7.0.0
    sudo npm install
    sudo npm audit fix
    sudo npm audit fix --force
    bower install --allow-root
    wget https://files.gitter.im/sammy007/open-ethereum-pool/IBJl/intl-format-cache.rar
    unrar x intl-format-cache.rar node_modules/intl-format-cache/ -Y
    chmod +x build.sh
    ./build.sh
    cd ../
    cp misc/nginx-default.conf /etc/nginx/sites-available/default
    systemctl enable nginx.service && systemctl stop nginx.service && systemctl start nginx.service
    screen -S pool ./build/bin/open-ethereum-pool config_api.json
    




    Saved required for my instance depends.
sudo apt install gawk


wget https://launchpad.net/ubuntu/+archive/primary/+sourcefiles/glibc/2.29-0ubuntu2/glibc_2.29.orig.tar.xz
tar -xf glibc_2.29.orig.tar.xz
cd glibc-2.29
mkdir build
cd build
export glibc_install="$(pwd)/install"
../configure --prefix "$glibc_install"
make -j `nproc`
make install -j `nproc`