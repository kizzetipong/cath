# cath
Just for fun

# Installation guides
0. Install Node.js -> https://nodejs.org/en/ Version 4.4.7
0. Pull this repo
0. Open git bash on root of this directory
0. Use command 'npm install -g grunt-cli'
0. Use command 'npm install -g bower'
0. Use command 'npm install'
0. Use command 'bower install'
0. Use command 'grunt prepare'
0. Use command 'openssl req -x509 -newkey rsa:2048 -keyout keytmp.pem -out cert.pem -days 365' to generate cert.pem
0. Use command 'openssl rsa -in keytmp.pem -out key.pem' to generate key.pem (http://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node)

* Use command 'grunt serve' to start web server with http://localhost:9999
* Use command 'grunt build' to prepare deployment package save at folder '/dist'

#How to run server to DO
0. Make sure that RAM on droplet is enough for running server (add swap file if necessary)
0. Use command 'grunt build' to create deployment folder on '/dist'
0. Open folder '/dist'
0. User forever module to run server with command 'forever start server_host.js'
0. Web app will be opened on default port 80
0. Use command 'forever restartall' to restart server

# How to deploy to Firebase
0. Open cmd (or git bash) on root of this directory
0. Install firebase tool with command 'npm install -g firebase-tools'
0. Use command 'firebase login'
0. Use command 'firebase use --add' and choose cath-ce838
0. Use command 'firebase serve' to run in http://localhost:5000
0. Use command 'firebase deploy' to deploy to https://cath-ce838.firebaseapp.com/
