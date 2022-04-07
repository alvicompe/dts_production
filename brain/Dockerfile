FROM golang:1.12-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh && \
    apk add --no-cache tzdata
WORKDIR /app
COPY brain .
EXPOSE 9002
WORKDIR /app/build
RUN ["chmod", "+x", "/app/build/brain"]
CMD ["./brain"]
