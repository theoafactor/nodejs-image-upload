FROM node:alpine
RUN mkdir -p /home/napa
COPY . /home/napa
WORKDIR /home/napa
RUN npm install
EXPOSE 3000
CMD ["node", "server"]