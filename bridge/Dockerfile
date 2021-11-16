FROM golang:1.12-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh && \
    apk add --no-cache tzdata
WORKDIR /app
COPY bridge .
EXPOSE 9001
WORKDIR /app/build

CMD ["./bridge"]
