/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

const fs = require("fs");

function problem2() {
  fs.readFile("./lipsum.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      data = data.toUpperCase();
      fs.writeFile("./newFile1.txt", data, (err) => {
        if (err) {
          console.error(err);
        } else {
          fs.writeFile("./filenames.txt", "newFile1.txt", (err) => {
            if (err) {
              console.error(err);
            } else {
              fs.readFile("./newFile1.txt", "utf-8", (err, data) => {
                if (err) {
                  console.error(err);
                } else {
                  data = data.toLowerCase();
                  data = data.replaceAll(".", ".\n");
                  fs.writeFile("./newFile2.txt", data, (err) => {
                    if (err) {
                      console.error(err);
                    } else {
                      console.log("newFile2 created");
                      fs.appendFile(
                        "./filenames.txt",
                        "\nnewFile2.txt",
                        (err) => {
                          if (err) {
                            console.error(err);
                          } else {
                            // console.log("file appended");
                            fs.readFile(
                              "./newFile2.txt",
                              "utf-8",
                              (err, data) => {
                                if (err) {
                                  console.error(err);
                                } else {
                                  data = data.split(".").sort().join().trim();
                                  //   console.log(data);
                                  fs.writeFile(
                                    "./newFile3.txt",
                                    data,
                                    (err) => {
                                      if (err) {
                                        console.error(err);
                                      } else {
                                        console.log("newFile 3 created");
                                        fs.appendFile(
                                          "./filenames.txt",
                                          "\nnewFile3.txt",
                                          (err) => {
                                            if (err) {
                                              console.error(err);
                                            } else {
                                              console.log("file3 appended");
                                              fs.readFile(
                                                "./filenames.txt",
                                                "utf-8",
                                                (err, data) => {
                                                  if (err) {
                                                    console.error(err);
                                                  } else {
                                                    //console.log(data);
                                                    data
                                                      .split("\n")
                                                      .forEach((data) => {
                                                        fs.unlink(
                                                          data,
                                                          (err) => {
                                                            if (err) {
                                                              console.log(err);
                                                            } else {
                                                              console.log(
                                                                `file deleted  ${data}`
                                                              );
                                                            }
                                                          }
                                                        );
                                                      });
                                                  }
                                                }
                                              );
                                            }
                                          }
                                        );
                                      }
                                    }
                                  );
                                }
                              }
                            );
                            console.log("file 2 appended");
                          }
                        }
                      );
                    }
                  });
                  //   console.log(data);
                }
              });
              console.log("file 1 appended");
            }
          });

          console.log("newFile1 created");
        }
      });
    }
  });
}
module.exports = problem2;
