# node button

A simple hack to remotely trigger a LED light connected to a Raspberry Pi (running Raspbian).

The Raspberry Pi is running [Express](http://expressjs.com/) on [Node](https://nodejs.org/) and hosts a simple static website with a button. It's also connected to a LED light through a simple breadbord and using the GPIO with [onoff](https://github.com/fivdi/onoff).

## Usage

### install

Just copy over the files to your Raspberry Pi running Raspbian.

````
$ npm install
````

### start

Start it to create a webserver listening to port `3000`. It uses the same IP you're probably using for SSH to it.

````
$ npm start
````

## Report

Pretty simple to set up. The hard part was trying to use Azure and Notification Hubs without running Windows 10 IoT on the Raspberry. 
