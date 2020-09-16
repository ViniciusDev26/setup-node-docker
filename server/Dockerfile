FROM node:12-alpine

WORKDIR /usr/app/server

COPY package.json yarn.lock ./

RUN yarn

COPY . .
