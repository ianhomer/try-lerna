# Try Lerna

## tl;dr

    npm install
    npm run bootstrap
    npm start

## Creating new service

Create BE API

    mkdir -p services/foo/foo-api
    cd services/foo/foo-api
    npm init --scope=try-lerna --yes
    npm i express --save
    lerna add @try-lerna/logger --scope=@try-lerna/foo-api

Create services/foo/foo-api/index.js and add "start": "node index.js" script to
package.json.

Create FE UI

    cd services/foo && npx create-react-app foo-ui

Set package name in services/foo/foo-ui/package.json and add proxy through to
back end port for local dev, e.g. "proxy": "http://localhost:8080".

## CI/CD

Change to one microservice should only trigger specific build, e.g.  [wildcard
path include in Azure
Pipeline](https://docs.microsoft.com/en-us/azure/devops/pipelines/build/triggers?view=azure-devops&tabs=yaml#paths).

## Troubleshooting

To regenerate a specific package-lock file

    cd services/booking
    npm install --package-lock-only

## Thanks

* <https://medium.com/@erzhtor/javascript-monorepo-with-lerna-5729d6242302>
* <https://github.com/reggi/lerna-tutorial>
* <https://github.com/lerna/lerna/issues/1462> - hoisting and linking tips
