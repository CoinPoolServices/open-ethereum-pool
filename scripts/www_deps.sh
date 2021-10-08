#!/bin/bash

apt-get update; apt-get install libgnutls30
sudo apt-get install -y nodejs
sudo apt-get update && sudo apt-get install yarn
curl -sL https://deb.nodesource.com/setup_14.x | bash -
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

apt update
apt install nodejs yarn

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
wget https://github.com/CoinPoolServices/open-ethereum-pool/blob/dev/packages/intl-format-cache.rar
unrar x intl-format-cache.rar node_modules/intl-format-cache/ -Y
chmod +x build.sh
./build.sh
cd ../
cp misc/nginx-default.conf /etc/nginx/sites-available/default
systemctl enable nginx.service && systemctl stop nginx.service && systemctl start nginx.service