FROM node:22-slim

RUN apt-get update && apt-get install -y \
    git \
    procps \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /workspaces/${localWorkspaceFolderBasename}

USER node