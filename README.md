# TL;DR

    npm install
    npm start 

# Creating new service

Create BE API

    mkdir -p services/user-api
    cd services/user-api
    npm init --scope=try-lerna --yes
    npm i express --save
    lerna add @try-lerna/logger --scope=@try-lerna/user-api

Create 

    
    

# Thanks

* https://medium.com/@erzhtor/javascript-monorepo-with-lerna-5729d6242302
* https://github.com/reggi/lerna-tutorial