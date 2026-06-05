FROM jenkins/jenkins:lts

USER root

# Install basic packages

RUN apt-get update && \
apt-get install -y \
curl \
ca-certificates \
gnupg \
lsb-release 

# Install Node.js and npm

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
apt-get install -y nodejs

# Install kubectl

RUN curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl" && \
install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl

USER jenkins
