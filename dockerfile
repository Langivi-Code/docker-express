FROM ubuntu:20.04
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["node", "./bin/www"]