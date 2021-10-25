#!/usr/bin/env bash

## Make sure you are logged in to "registry.gitlab.com", do "docker login registry.gitlab.com"

docker build --no-cache -t registry.gitlab.com/shopcrete.2021/shopcreate-web .

docker push registry.gitlab.com/shopcrete.2021/shopcreate-web