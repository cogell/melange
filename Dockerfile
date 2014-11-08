# Pull base image.
FROM dockerfile/nodejs

# Install PhantomJS deps
RUN apt-get update
RUN apt-get install libfreetype6 libfontconfig -y

# Install Gulp
RUN npm install -g gulp


RUN npm install -g karma-phantomjs-launcher

# Link phantomjs to usr/bin
RUN ln -s /home/ubuntu/phantomjs/bin/phantomjs /usr/bin/phantomjs

# Define working directory.
WORKDIR /app

# Define default command.
CMD ["bash"]