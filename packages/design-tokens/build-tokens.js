#!/usr/bin/env node

/**
 * build-tokens.js
 * Script to compile TypeScript tokens to JavaScript
 */

const fs = require('fs-extra');
const { execSync } = require('child_process');
const path = require('path');

console.log("⚙️ Compiling tokens...");

// First, ensure token output directories exist
fs.ensureDirSync("./dist/tokens");
fs.ensureDirSync("./dist/css");

// Clean up any existing CSS files in dist
fs.removeSync("./dist/css");
fs.ensureDirSync("./dist/css");

// Compile TypeScript tokens to JavaScript
try {
  // Use the yarn tsc script we added to package.json
  execSync("yarn tsc --project tsconfig.tokens.json", { stdio: 'inherit' });
  console.log("✅ Tokens compiled successfully");
  
  // Now run the CSS generation script
  try {
    // Use require to evaluate the generate-css.js file
    require('./generate-css');
  } catch (cssError) {
    console.error("❌ Error generating CSS:", cssError);
    process.exit(1);
  }
} catch (error) {
  console.error("❌ Error in build process:", error);
  process.exit(1);
}
