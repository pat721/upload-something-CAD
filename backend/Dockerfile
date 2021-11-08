FROM node:17-alpine3.12
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD index.js ./
ADD cloudStorage ./cloudStorage
ADD controllers ./controllers
ADD database ./database
ADD public ./public
ADD routes ./routes
CMD [ "node", "index.js"]