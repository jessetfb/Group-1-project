const fs = require('fs');

const storeEmail = (email) => {
  fs.appendFile('emails.txt', `${email}\n`, (err) => {
    if (err) throw err;
    console.log('Email saved to emails.txt');
  });
};

module.exports = { storeEmail };