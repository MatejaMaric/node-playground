FROM node:14

ENV PORT=8080
ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm clean-install --only=production

COPY . .

EXPOSE ${PORT}

USER node

CMD [ "node", "index.js" ]
