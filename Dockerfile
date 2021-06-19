FROM node:16

SHELL ["/bin/bash", "-c"]

COPY . /app

WORKDIR /app

RUN npm install && \
	npx lerna bootstrap && \
	pushd packages/storybook-vue && \
	npm run build-storybook && \
	popd

WORKDIR /app/packages/storybook-vue/storybook-static

EXPOSE 8080

CMD ["npx", "http-server"]