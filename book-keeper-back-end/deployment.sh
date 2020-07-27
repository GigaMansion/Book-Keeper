# remove any existing docker installations
sudo apt-get remove docker docker-engine docker.io containerd runc

# allow apt to use repositories over HTTPS
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

# Add Docker’s official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Verify the key with fingerprint
# 9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
sudo apt-key fingerprint 0EBFCD88

# Add the 'stable' repository
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

sudo apt-get update

# install docker engine
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose

# start docker containers
sudo docker-compose build
sudo docker-compose up --remove-orphans