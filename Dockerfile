FROM node:14.16
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "./bin/www" ]
