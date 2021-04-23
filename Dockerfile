# stage 1
FROM node:alpine AS build-step
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2
FROM nginx:alpine
COPY --from=build-step /app/dist/search-engine-ui /usr/share/nginx/html
EXPOSE 4200
