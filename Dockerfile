FROM node:14

ENV PORT=8080
ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package*.json ./

USER node

RUN npm clean-install --only=production

COPY . .

EXPOSE ${PORT}

CMD [ "node", "index.js" ]
