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

* Use command 'grunt serve' to start web server with http://localhost:9999
* Use command 'grunt build' to prepare deploymeny package save at folder '/dist'

#How to run server to DO
0. Make sure that RAM on droplet is enough for running server (add swap file if necessary)
0. Open folder /dist
0. Use command 'node server_host.js'
0. Web app will be opened on default port 80

# How to deploy to Firebase
0. Open cmd (or git bash) on root of this directory
0. Install firebase tool with command 'npm install -g firebase-tools'
0. Use command 'firebase login'
0. Use command 'firebase use --add' and choose cath-ce838
0. Use command 'firebase serve' to run in http://localhost:5000
0. Use command 'firebase deploy' to deploy to https://cath-ce838.firebaseapp.com/
