FROM node:14

# Create app directory
RUN mkdir -p /usr/src/app/portfolio
WORKDIR /usr/src/app/portfolio
COPY . .

EXPOSE 8088
CMD yarn start