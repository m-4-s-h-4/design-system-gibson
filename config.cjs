const StyleDictionary = require("style-dictionary");

const scssCustomFormat = {
  name: "scss/variables",
  formatter: ({ dictionary }) => {
    const serializeValue = (value, name) => {
      // Check if the value is a color token and needs to be referenced as a CSS variable
      if (name.includes("color") && value.startsWith("brown")) {
        return `var(--tokens-tokens-color-${value})`;
      }
      return value;
    };

    return `${StyleDictionary.formatHelpers.fileHeader({ fileHeader: true })}

:root {
${dictionary.allProperties.map((prop) => `  --${prop.name}: ${serializeValue(prop.value, prop.name)};`).join("\n")}
}
`;
  },
};

const jsExportFormat = {
  name: "javascript/export",
  formatter: ({ dictionary }) => {
    const formatName = (name) => {
      return name
        .replace(/--/g, "")
        .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
        .replace(/^([a-z])/g, (g) => g.toUpperCase());
    };

    return `${StyleDictionary.formatHelpers.fileHeader({ fileHeader: true })}

${dictionary.allProperties.map((prop) => `export const ${formatName(prop.name)} = ${JSON.stringify(prop.value)};`).join("\n")}
`;
  },
};

StyleDictionary.registerFormat(jsExportFormat);
StyleDictionary.registerFormat(scssCustomFormat);

StyleDictionary.registerFileHeader({
  name: "myCustomHeader",
  fileHeader: (defaultMessage) => {
    return [...defaultMessage, `hello?`, `is it me you're looking for?`];
  },
});

module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    scss: {
      transformGroup: "css",
      buildPath: "src/tokens/css/",
      files: [
        {
          destination: "_variables.css",
          format: "scss/variables",
        },
      ],
    },
    javascript: {
      transformGroup: "js",
      buildPath: "src/tokens/js/",
      files: [
        {
          destination: "variables.js",
          format: "javascript/export",
        },
      ],
    },
  },
};
