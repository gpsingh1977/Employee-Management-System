# EmpMgmntGurpreet 

## Environment Setup

My working environment was:
Angular CLI: 16.1.0
Node: 18.17.0
Package Manager: npm 8.19.3

Please make sure you have the same Angular CLI version on your machine. Please do following to ensure that:
npm uninstall -g angular-cli
npm cache clean --force
npm install -g angular-cli@16.1.0

Node and npm versions are not that important and under most situations no change should be required for them.

## API Server

I have used a local node api server to serve the Employees database. Please do 
npm install -g ts-node

before you can run the server.

For running the server please run
npm run server 

in local project folder.

Please make sure "HTTP REST Api Server running at http://localhost:9000" is printed on console which will confirm server started properly.

## Running Angular App

Run
npm install

to install all dependencies.

Then run 
npm run start 

to run the app. Navigate to https://localhost:4200/

You may get SSL certificate error when you go to https://localhost:4200/ in your browser. To fix that, paste this
in your browser:
chrome://flags/#allow-insecure-localhost

and change "Allow invalid certificates for resources loaded from localhost." to enabled and restart your browser.

## Notes

I have designed the app to meet all the requirements except Unit tests. As I had told the folks earlier, I won't have time to write the tests at this point. That is a substaintial effort in itself.

I have not used local storage as I think persisting data in local backend server is more elegant solution.

