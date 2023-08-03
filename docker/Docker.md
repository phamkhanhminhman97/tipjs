docker build . -t <your username>/node-web-app

# Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container

docker run -p 49160:8080 -d <your username>/node-web-app
docker run -it -d --name name_container -p 3000:3000 phamminhman10/base-nestjs

# Enter the container
$ docker exec -it <container id> /bin/bash | sh

# Tag
$ docker tag phamminhman10/base-nestjs:latest phamminhman10/base-nestjs:v1

# Push
$ docker push phamminhman10/qweqwe:tagname 

$ docker network create your_network_name


$ docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' container1

$ docker exec -it container1 ping container2

$ docker exect -it container1 sh

$ apk add curl

$ curl container2:port
