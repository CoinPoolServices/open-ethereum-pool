#!/bin/bash
cd ../..

screen -S geth geth --http --syncmode "fast" --http.api "eth,net,web3,personal" --miner.etherbase "0xFff62c09b2646C35ecbc07CADb8dA83074D6e618" --cache=4096 --mine --unlock "0xFff62c09b2646C35ecbc07CADb8dA83074D6e618" --allow-insecure-unlock --password /pool/pwd

