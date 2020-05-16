sudo apt update

# install required software on the Linux machine
# with anwsering 'yes' to all questions asking for disk usage permission
sudo apt install -y python3-pip python3-dev build-essential libssl-dev libffi-dev python3-setuptools nginx

# install the Python3 virtualenv environment
sudo apt install python3-venv

# clone the code to the root directory
git clone https://github.com/GigaMansion/Book-Keeper.git

# change directory to the backend directory
cd Book-Keeper/book-keeper-back-end

# create a virtualenv environment in the backend directory
python3 venv venv

# activate the virtualenv environment
source venv/bin/activate

# install the packages from requirements.txt
pip3 install -r requirements.txt

# deactivate the virtual environemtn
deactivate

# move the system unit file to the systemctl folder
sudo cp book-keeper-back-end.service /etc/systemd/system/book-keeper-back-end.service

# start the system service
sudo systemctl start book-keeper-back-end

# enable the service so that it starts when the machine boots
sudo systemctl enable book-keeper-back-end

