const fs = require("fs");
const path = require("path");

const jsonFilePath = path.join(__dirname, "tokens", "tokens.json");

const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

const primitives = jsonData["tokens/primatives"];
const variablesMode1 = jsonData["variables/Mode 1"];

let cssContent = ":root {\n";

for (const [name, data] of Object.entries(primitives)) {
  cssContent += `  --${name}: ${data.value};\n`;
}

for (const [name, data] of Object.entries(variablesMode1)) {
  const reference = data.value.replace(/{|}/g, "");
  if (primitives[reference]) {
    cssContent += `  --${name}: var(--${reference});\n`;
  } else {
    cssContent += `  --${name}: ${data.value};\n`;
  }
}

cssContent += "}";

console.log(cssContent);

const outputFilePath = path.join(__dirname, "variables.css");
fs.writeFileSync(outputFilePath, cssContent);
