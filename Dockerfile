FROM node
COPY . /app
WORKDIR /app
# RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000
CMD npm run product
