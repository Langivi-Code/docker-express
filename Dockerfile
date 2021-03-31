FROM node:14.16
WORKDIR /classwork
COPY . .

CMD [ "node", "index.js" ]