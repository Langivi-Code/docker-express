FROM node:14.16
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["ubuntu", "./bin/www"]