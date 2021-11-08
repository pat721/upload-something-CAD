FROM node:17-alpine3.12
WORKDIR /app
ADD package*.json ./
ADD rollup.config.js ./
RUN npm install

ADD ./src ./src
ADD ./public ./public
RUN npm run-script build


EXPOSE 5000

CMD [ "npm", "start"]