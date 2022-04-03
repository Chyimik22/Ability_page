ARG BASE_IMAGE
FROM $BASE_IMAGE

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install \
    -y -o Dpkg::Options::="--force-confold" --no-install-recommends --no-install-suggests \
    build-essential
