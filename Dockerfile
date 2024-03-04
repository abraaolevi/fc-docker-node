FROM node:21-alpine3.19
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "index.js" ]