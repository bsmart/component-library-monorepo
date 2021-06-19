1. Add `.dockerignore` file to ignore node_modules
1. Make a dockerfile `touch Dockerfile`
2. Push to image repository (DockerHub) OR push image directly into minikube node
3. Install Helm chart deployment that references the docker image

Build image: `docker build -t storybook-img .`
Remove image: `docker run --rm -it storybook-img bash`


Run storybook static using http server
1. cd into `storybook-static`
2. run http server `npx http-server`

Helm
Install Helm `brew install helm`
Create Helm Chart `helm create chart`
`helm install component-library chart`
`helm uninstall component-library`
`helm template chart` - run from root dir
`helm list`

`kubectl get pods`
`kubectl get service`


???
`minikube cache add storybook-img `
`kubectl port-forward svc/component-library-portland-component-library 8080:80`
`docker ps`
`docker run --rm -it -p 8080:8080 storybook-img`