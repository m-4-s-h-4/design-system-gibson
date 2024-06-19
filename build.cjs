const fs = require("fs");
const path = require("path");

const jsonFilePath = path.join(__dirname, "tokens", "tokens.json");

const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

const primitives = jsonData["Variable collection/primatives"];
const tokens = jsonData["tokens/colors"];

let cssContent = ":root {\n";
for (const [name, data] of Object.entries(primitives)) {
  cssContent += `  --${name}: ${data.value};\n`;
}

for (const [name, data] of Object.entries(tokens)) {
  const ref = data.value.slice(1, -1);
  if (primitives[ref]) {
    cssContent += `  --${name}: var(--${ref});\n`;
  }
}

cssContent += "}";

console.log(cssContent);

const outputFilePath = path.join(__dirname, "variables.css");
fs.writeFileSync(outputFilePath, cssContent);
