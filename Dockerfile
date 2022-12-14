# step 1
FROM alpine

# step 2: install a software
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.16/main/' >> /etc/apk/repositories; 
RUN echo  'http://dl-cdn.alpinelinux.org/alpine/v3.16/community' >> /etc/apk/repositories
RUN apk update
RUN apk add --update npm
WORKDIR /usr/nodeapp
COPY ./ ./  
RUN npm install
RUN npm run build

# step 2.5: Configure the software

#step 3: Set default commands. List of command as strings separated by space
CMD ["npm", "run", "prod"]