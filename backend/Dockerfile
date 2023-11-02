FROM node:lts-alpine3.18

WORKDIR /app

COPY ./package.json .
RUN npm cache clean --force
RUN npm install nodemon knex pg -g
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]