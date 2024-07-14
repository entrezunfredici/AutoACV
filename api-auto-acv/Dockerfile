FROM node:18-alpine AS build

WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine AS runtime

WORKDIR /
COPY package*.json ./
RUN npm install --only=production
#COPY --from=build /app/.next ./.next
#COPY --from=build /app/public ./public

EXPOSE 8000
USER node
CMD ["node", "server.js"]