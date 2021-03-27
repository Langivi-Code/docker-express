FROM ubuntu:20.04
WORKDIR /app
COPY package*.json ./
RUN apt update && apt install -y nodejs
RUN apt install -y npm
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]