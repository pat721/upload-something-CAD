FROM node:17-alpine3.12
WORKDIR /app

COPY . ./
RUN npm install
RUN npm run build

EXPOSE 5000
ENV HOST=0.0.0.0

CMD ["npm", "start"]