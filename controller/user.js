const database = require('../model/database.json');
const fs = require('fs')

const saveToDB = (string) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./model/database.json', string, (err, data) => {
          if (err) {
            reject(err)
         } else {
            resolve(data)
         }
        })
    })
}
