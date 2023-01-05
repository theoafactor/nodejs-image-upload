# nodeJS-image-upload

Simple NodeJS Express Program get files as input from user and upload it to the server. 

To install necessary packages and start the server: 
    
    npm install && npm start



## - PLEASE NOTE
- 1. Create the 'napa-network' network first: 
```sh
    docker network create napa-network
```

- 2. The command for **running mongodb**
``` sh
    docker run -d -p 27018:27017 --network napa-network \
    > -e MONGO_INITDB_ROOT_USERNAME=admin \
    > -e MONGO_INITDB_ROOT_PASSWORD=admin \
    > --name mongodb \
    > mongo
```
- 3. The command for **running mongo-express**
```sh
    docker run -d -p 8081:8081 --network napa-network \
    > -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
    > -e ME_CONFIG_MONGODB_ADMINPASSWORD=admin \
    > -e ME_CONFIG_MONGODB_SERVER=mongodb \
    > --name mongo-expresso \
    > mongo-express
```

Remember that you need to also run the built image for the application: 
```sh
    docker run -d -p 3000:3000 --network napa-network \
    > --name napa-app \
    > napa
```
I have deliberately left the .env file in the project folder. Use as it is.



