const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowseWindow} = electron;

let mainwindow;

// Listen for app to be ready
app,on('ready', function(){
    // Create new window 
    mainwindow = new BrowseWindow({});
    // Load html into window
    mainwindow.loadURL(url.format({
        pathname: path.join(__dirname, 'indexwindow.html'),
        protocol: 'file:',
        slashes: true
    }));
});