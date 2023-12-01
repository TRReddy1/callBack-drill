/*
    Folder structure:
        ├── fs-problem1.cjs
        ├── fs-problem2.cjs
        └── test
            ├── testFsProblem1.cjs
            └── testFsProblem2.cjs
*/

const fs = require("fs");

// const problem1 = "./fs-problem1.cjs";

// const createFile = fs.writeFile(problem1, "", (err, data) => {
//   if (err) {
//     return err;
//   } else {
//     console.log(data);
//   }
// });

// const problem2 = "./fs-problem2.cjs";

// const createFile2 = fs.writeFile(problem2, "", (err, data) => {
//   if (err) {
//     return err;
//   } else {
//     console.log(data);
//   }
// });

// fs.mkdir("./test", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("sucessfully created");
//   }
// });

fs.writeFile("./test/testFsProblem2.cjs", "", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log("file created");
  }
});
