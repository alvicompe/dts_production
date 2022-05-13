FROM golang:1.12-alpine
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh && \
    apk add --no-cache tzdata
WORKDIR /app
COPY dts .
EXPOSE 9000
EXPOSE 5000
WORKDIR /app/build
RUN ["chmod", "+x", "/app/build/dts"]
CMD ["./dts"]
