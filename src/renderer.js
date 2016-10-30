const {ipcRenderer} = require('electron');
const fs = require('fs');

ipcRenderer.on('open-file', (event, arg) => {
    fs.readFile(arg, function(err, contents) {
        const container = document.getElementById('container');
        QP.showPlan(container, contents);
    });
});