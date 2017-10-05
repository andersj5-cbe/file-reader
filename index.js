const fs = require('fs');

/**
 * Tool for reading configuration files
 * @param {String} path path to configuration file
 * @param {requestedCallback} cb callback function
 */

function readContents(path, cb){
    fs.readFile(path,function(err,data){
        if (err){
            cb(err);
        } 
        if(data){
            data = JSON.parse(data);
            cb(null,data);
        }
    });
}

module.exports = readContents;
