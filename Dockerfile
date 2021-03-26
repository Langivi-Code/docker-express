FROM ubuntu:20.04
RUN apt update
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y npm
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "./bin/www" ]
