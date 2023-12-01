/*
    Problem 1:

    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously

    Ensure that the function is invoked as follows:
        fsProblem1(absolutePathOfRandomDirectory, randomNumberOfFiles)
*/

const fs = require("fs");

function problem1(dirPath, num) {
  creation(dirPath, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      creationFile(dirPath + "/file.json", num, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }
  });
}

function creation(dirpath, callback) {
  fs.mkdir(dirpath, (err, data) => {
    if (err) {
      console.error(err);
      callback(err, null);
    } else {
      console.log("dir created");
      callback(null, data);
    }
  });
}

function creationFile(filePath, num, callback) {
  if (num == 0) {
    return;
  }

  fs.writeFile(filePath, "", (err) => {
    if (err) {
      console.error(err);
      callback(err);
    } else {
      console.log("file created " + num);
      callback(null);

      deletion(filePath, num, callback);
    }
  });
}

function deletion(path, num, callback) {
  fs.unlink(path, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("deleted " + num);
      callback(null);
      num--;
      creationFile(path, num, callback);
    }
  });
}

module.exports = problem1;
