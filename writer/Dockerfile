FROM golang:1.12-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh && \
    apk add --no-cache tzdata
WORKDIR /app
COPY writer .
EXPOSE 9003
WORKDIR /app/build
RUN ["chmod", "+x", "/app/build/writer"]

CMD ["./writer"]
