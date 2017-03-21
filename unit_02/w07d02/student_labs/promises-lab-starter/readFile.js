'use strict';

const fs = require('fs');

let inFile = process.argv[2];

// fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
//   if (error) {
//     console.error(error);
//   }
//
//   // 'Billy\nJames\nNick\n' --> ['Billy', 'James', 'Nick']
//
//   let lines = content.split('\n');
//
//   // clean up the array by removing the empty line
//   lines.pop();
//
//   lines.forEach(function(line) {
//     console.log('Hello, ' + line + '!');
//   });
// });

//myCode
var promiseToReadFile = new Promise(function(resolve, reject) {
  fs.readFile(inFile, { encoding: 'utf8' }, function(err, content) {
    if (err) {
      reject('an error');
    } else {

       let lines = content.split('\n');
       console.log(lines);
       lines.pop();
       resolve(lines);
      //  console.log(lines);
     }
    });
  });
 promiseToReadFile
   .then(function(fromResolve) {
     fromResolve.forEach(function(var1) {
      console.log('Hello, ' + var1 + "!");
     });
   })
   .catch(function(fromReject) {
    console.log(fromReject);
   })

//*************Other Way***************//
   var promiseToReadFile = new Promise(function(resolve, reject) {
     fs.readFile(inFile, { encoding: 'utf8' }, function(err, content) {
       resolve(content);
       reject(error);
       });
     });

    promiseToReadFile.then(function(result) {
      return result;
    })
    .then(function(resutl) {
      let lines = result.split('\n');
      return lines;
    })
    .then(function(lines) {
      lines.pop();
      return lines;
    })
    .then(function(lines) {
      lines.forEach(function(line) {
        console.log('Hello, ' + line + "!");
      })
    }
