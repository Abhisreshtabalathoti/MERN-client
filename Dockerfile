FROM node:20.15
WORKDIR /app
#copy the code
COPY package.json./
RUN npm install
COPY . .
RUN npm rum build
#image to sever our app
FROM nginx:alpine
COPY --from=0/app/build/usr/share/nginx
EXPOSE 80
CMD["nginx","start"]