# NgxLibraryTemplate

this is a template for the development of Angular libraries - ex. ngx-lib

eslint & docker/traefik

# DEVELOP with docker

docker-compose up -d

go to <http://localhost>

# DEVELOP without docker

for develop without docker you have to:

`sudo chown -R ${USER} /usr/local/lib`
`sudo chown -R ${USER} /root`

`cd ngx-library-template`

terminal 1:

`npm install && npm run build:ngx-lib && npm run link:lib && npm run build:lib:watch`

terminal 2:

`npm run start`

go to <http://localhost:4200>
