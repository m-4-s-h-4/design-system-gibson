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

const jsFlatFormat = {
  name: "javascript/flat",
  formatter: ({ dictionary, options }) => {
    return `module.exports = ${JSON.stringify(dictionary.tokens, null, 2)}`;
  },
};

StyleDictionary.registerFormat(jsFlatFormat);
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
      buildPath: "build/css/",
      files: [
        {
          destination: "_variables.css",
          format: "scss/variables",
        },
      ],
    },
    javascript: {
      transformGroup: "js",
      buildPath: "build/js/",
      files: [
        {
          destination: "_variables.js",
          format: "javascript/flat",
        },
      ],
    },
  },
};
