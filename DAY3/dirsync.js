import fs from "fs";


const readDirSync = (path) => {
  try {
    const files = fs.readdirSync(path);
    console.log("Files in directory:", files);
  } catch (error) {
    console.error("Error reading directory:", error.message);
  }
};


const makeDirSync = (path) => {
  try {
    fs.mkdirSync(path);
    console.log("Directory created successfully");
  } catch (error) {
    console.error("Error creating directory:", error.message);
  }
};


const removeDirSync = (path) => {
  try {
    fs.rmSync(path, { recursive: true, force: true });
    console.log("Directory removed successfully");
  } catch (error) {
    console.error("Error removing directory:", error.message);
  }
};


makeDirSync("./testFolder");
readDirSync("./");
removeDirSync("./testFolder");
