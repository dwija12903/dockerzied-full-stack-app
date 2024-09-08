# 🚀 Dockerized Full-Stack Web Application
This Showcases a Dockerized full-stack web application built with React for the frontend, Node.js for the backend, and MySQL for the database. The main focus of this project is to demonstrate containerization using Docker, making it easy for deployment and scalability.

# 🌟 Introduction
This project demonstrates how to Dockerize a simple full-stack web application using React, Node.js, and MySQL. The frontend, backend, and database components are containerized using Docker, and they communicate with each other via a Docker network. The Docker images for this project are available on DockerHub, making it easy to deploy the application in any environment that supports Docker.

## 🐳 DockerHub Repository
All Docker images for this project are available on DockerHub under the repository -
- Repository: [dwijapanchal/dwija-react-node-mysql-docker](https://hub.docker.com/repository/docker/dwijapanchal/dwija-react-node-mysql-docker/general)
- Docker Images - 
  - Frontend: [dwijapanchal/dwija-react-node-mysql-docker:frontend-latest](https://hub.docker.com/layers/dwijapanchal/dwija-react-node-mysql-docker/frontend-latest/images/sha256-4dc011105824f4f4e098a70d5e42304260af1fe6ca4ec21ba391335f04d945c8?context=repo)
  - Backend: [dwijapanchal/dwija-react-node-mysql-docker:backend-latest](https://hub.docker.com/layers/dwijapanchal/dwija-react-node-mysql-docker/backend-latest/images/sha256-2e8bfd68c855bfc4ea40ef344306755cc3dde3913c800401d30e1bc01c5e4edc?context=repo)
  - MySQL: [dwijapanchal/dwija-react-node-mysql-docker:mysql-latest](https://hub.docker.com/layers/dwijapanchal/dwija-react-node-mysql-docker/latest/images/sha256-bd16095358e14af89f0f4b68bbff32aa0bb7ab2260d188bcc9548fff4b6d6e5e?context=repo)

## ⚙️ Steps to Deploy the Dockerized Application
1. Create Docker Network `docker network create my-network`
2. Build and Run MySQL Docker Container
```cd ./database/
docker build -t dwija-mysql-image .
docker run --name dwija-mysql-container --network=my-network -p 3308:3308 -v mysql-data:/var/lib/mysql -d dwija-mysql-image
```
3. Initialize MySQL Database and Tables `docker exec -it dwija-mysql-container /bin/bash`
```
mysql -u root -p
SHOW DATABASES;
USE dwija;
CREATE TABLE details (name VARCHAR(40), gmail VARCHAR(40) PRIMARY KEY, message VARCHAR(100));
CREATE TABLE list_of_details (name VARCHAR(40), gmail VARCHAR(40) PRIMARY KEY, message VARCHAR(100));
```
4. Build and Run Backend Docker Container
```
cd ./backend/
docker build -t dwija-backend .
docker run -dp 3500:3500 --name 21bcp333-backend-container --network=my-network dwija-backend
```
5. Build and Run Frontend Docker Container
```
cd ./frontend/
docker build -t dwija-frontend .
docker run -d --name 21bcp333-frontend-container --network=my-network -p 80:80 dwija-frontend
```
6. Deploy it to Dockerhub
  - Tag and push MySQL image
  ```
  docker tag dwija-mysql-image:latest dwijapanchal/dwija-react-node-mysql-docker:mysql-latest
  docker push dwijapanchal/dwija-react-node-mysql-docker:mysql-latest
  ```
  - Tag and push Backend image
  ```
  docker tag dwija-backend:latest dwijapanchal/dwija-react-node-mysql-docker:backend-latest
  docker push dwijapanchal/dwija-react-node-mysql-docker:backend-latest
  ```
  - Tag and push Frontend image
  ```
  docker tag dwija-frontend:latest dwijapanchal/dwija-react-node-mysql-docker:frontend-latest
  docker push dwijapanchal/dwija-react-node-mysql-docker:frontend-latest
  ```
## 🌐 View Flow of Images 
[Images](https://github.com/dwija12903/dockerzied-full-stack-app/tree/main/img)
