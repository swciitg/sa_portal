FROM node:18-alpine
WORKDIR  /app
COPY package*.json ./
COPY next.config.js ./

RUN npm ci --production

COPY . ./

RUN npm run build
CMD ["npm","run","start"]
