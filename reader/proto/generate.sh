#!/bin/bash

protoc *.proto \
    --js_out=import_style=commonjs,binary:../../ui/operator/src/pb \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:../../ui/operator/src/pb \
    --go-grpc_out=. --go_out=.

cp *.proto ../../ui/operator/src/pb