FROM node:12-alpine

WORKDIR /usr/app/frontend

COPY package.json yarn.lock ./

RUN yarn

COPY . .
