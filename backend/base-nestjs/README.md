Setup generate ssh-key (GIT.MD)
=================================================================

# curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -

# sudo apt install nodejs

# sudo npm install -g pm2

# sudo npm i

================================================================

# sudo apt update

# sudo apt install postgresql postgresql-contrib

# sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'newpassword';"

# sudo service postgresql start

# sudo -u postgres psql

# sudo nano /etc/postgresql/<version>/main/postgresql.conf

listen_addresses = '*'

# sudo nano /etc/postgresql/<version>/main/pg_hba.conf

host    all             all             0.0.0.0/0               md5

# sudo service postgresql restart



