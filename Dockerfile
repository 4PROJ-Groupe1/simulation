FROM node:14.16.1

WORKDIR /

ENV PATH /node_modules/.bin:$PATH

COPY simulation /

RUN yarn install 

CMD yarn start

EXPOSE 3000