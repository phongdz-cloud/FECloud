# Stage 1
WORKDIR /cloudproject_front
COPY . .
# Stage 2

FROM nginx:1.17.1-alpine
COPY --from=node /cloudproject_front/dist/angular-app /usr/share/nginx/html

