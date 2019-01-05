FROM node:10-alpine

LABEL author Rodrigo Pinheiro Matias <rodrigopmatias@gmail.com>
LABEL repository github:rodrigopmatias/node-minimal-project

COPY "./" "/app"
WORKDIR /app

RUN yarn install && \
    npm run db:migrate && \
    npm run test

CMD ["npm", "run", "start"]
