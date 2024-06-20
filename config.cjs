const StyleDictionary = require("style-dictionary");

// Custom format to handle nested objects correctly
const scssCustomFormat = {
  name: "scss/variables",
  formatter: ({ dictionary, options }) => {
    const serializeValue = (value) => {
      if (typeof value === "object") {
        return JSON.stringify(value, null, 2);
      }
      return value;
    };

    return `${StyleDictionary.formatHelpers.fileHeader({ fileHeader: true })}

:root {
${dictionary.allProperties.map((prop) => `  --${prop.name}: ${serializeValue(prop.value)};`).join("\n")}
}
`;
  },
};

const jsExportFormat = {
  name: "javascript/export",
  formatter: ({ dictionary, options }) => {
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
      buildPath: "tokens/css/",
      files: [
        {
          destination: "_variables.css",
          format: "scss/variables",
        },
      ],
    },
    javascript: {
      transformGroup: "js",
      buildPath: "tokens/js/",
      files: [
        {
          destination: "variables.js",
          format: "javascript/export",
        },
      ],
    },
  },
};
