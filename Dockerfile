FROM node:11-alpine

# application placed into /opt/app
RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY package.json .
COPY package-lock.json .

RUN npm install --production && npm cache clean --force

EXPOSE 3001

COPY . .

CMD ["npm","start"]