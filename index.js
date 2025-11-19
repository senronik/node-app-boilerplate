#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const projectName = process.argv[2];

if (!projectName) {
  console.log("❌ Please provide a project name:");
  console.log("   npx create-node-app-starter my-app");
  process.exit(1);
}

const targetPath = path.join(process.cwd(), projectName);
const templatePath = path.join(__dirname, "app");

// Create project folder
fs.mkdirSync(targetPath, { recursive: true });

// Copy template folder
function copyFolder(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach((file) => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);

    if (fs.lstatSync(srcFile).isDirectory()) {
      copyFolder(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

copyFolder(templatePath, targetPath);

// Install dependencies
console.log("📦 Installing dependencies...");
execSync(`cd ${projectName} && npm install`, { stdio: "inherit" });

console.log("\n🎉 Node app setup complete!");
console.log(`👉 cd ${projectName}`);
console.log("👉 Create a .env file with PORT and MONGO_URI (see README)");
console.log("👉 npm start");
