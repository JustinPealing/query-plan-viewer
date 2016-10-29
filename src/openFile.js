const {dialog, ipcMain} = require('electron');

function openFile(item, focusedWindow) {
    var result = dialog.showOpenDialog({
        properties: ['openFile']
    });
    if (result) {
        console.log(focusedWindow);
        focusedWindow.webContents.send('open-file', result[0]);
    }
}

module.exports.openFile = openFile;