/**
 * generate-css.js
 * Script to generate CSS files from compiled tokens
 */

const fs = require('fs-extra');
const path = require('path');

// Ensure CSS directory exists
fs.ensureDirSync("./src/css");
fs.ensureDirSync("./dist/css");

console.log("⚙️ Generating CSS files from tokens...");

// Simple utility to create CSS files with content
function writeTokenCSSFile(filename, content) {
  fs.writeFileSync(filename, content);
  console.log(`Created ${filename}`);
}

// Generate CSS variables from any token object
function generateCssVariables(tokenObj, prefix = "", parentKey = "") {
  let cssContent = "";

  if (!tokenObj) return cssContent;

  Object.entries(tokenObj).forEach(([key, value]) => {
    const fullKey = parentKey ? `${parentKey}-${key}` : key;

    if (
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value)
    ) {
      // If the value is an object (but not an array), recursively process it
      cssContent += generateCssVariables(value, prefix, fullKey);
    } else {
      // It's a leaf node, generate a CSS variable
      cssContent += `  --${prefix}-${fullKey}: ${value};\n`;
    }
  });

  return cssContent;
}

// Main function to generate CSS
function generateCSS() {
  try {
    // Import the compiled token files
    const colors = require('./dist/tokens/colors.js');
    const typography = require('./dist/tokens/typography.js');
    const spacing = require('./dist/tokens/spacing.js');
    const shadows = require('./dist/tokens/shadows.js');

    // Generate root CSS variables
    function generateRootCSS() {
      let cssContent = `/**
 * Auto Design Tokens - Root CSS Variables
 * GENERATED FILE - DO NOT EDIT DIRECTLY
 */

:root {
`;
      // Process all token groups
      cssContent += `  /* Color Variables */\n`;
      cssContent += generateCssVariables(colors.colors, "color");

      cssContent += `\n  /* Semantic Colors (Light Theme) */\n`;
      cssContent += generateCssVariables(colors.semanticColors, "color");

      // Add Explorer Colors
      if (colors.explorerColors) {
        cssContent += `\n  /* Explorer Colors */\n`;
        cssContent += generateCssVariables(
          colors.explorerColors,
          "explorer-color"
        );
      }

      // Add Explorer Gradients
      if (colors.gradients) {
        cssContent += `\n  /* Explorer Gradients */\n`;
        cssContent += generateCssVariables(
          colors.gradients,
          "explorer-gradient"
        );
      }

      cssContent += `\n  /* Typography */\n`;
      cssContent += generateCssVariables(
        typography.fontFamilies,
        "font-family"
      );

      cssContent += `\n  /* Font Sizes */\n`;
      cssContent += generateCssVariables(typography.fontSizes, "font-size");

      cssContent += `\n  /* Font Weights */\n`;
      cssContent += generateCssVariables(
        typography.fontWeights,
        "font-weight"
      );

      cssContent += `\n  /* Line Heights */\n`;
      cssContent += generateCssVariables(
        typography.lineHeights,
        "line-height"
      );

      if (typography.letterSpacings) {
        cssContent += `\n  /* Letter Spacing */\n`;
        cssContent += generateCssVariables(
          typography.letterSpacings,
          "letter-spacing"
        );
      }

      cssContent += `\n  /* Spacing */\n`;
      cssContent += generateCssVariables(spacing.spacing, "spacing");

      cssContent += `\n  /* Border Radius */\n`;
      Object.entries(spacing.borderRadius).forEach(([name, value]) => {
        const key = name === "DEFAULT" ? "default" : name.toLowerCase();
        cssContent += `  --radius-${key}: ${value};\n`;
      });

      cssContent += `\n  /* Shadows */\n`;
      cssContent += generateCssVariables(shadows.shadows, "shadow");

      cssContent += `\n  /* Component Shadows */\n`;
      cssContent += generateCssVariables(shadows.componentShadows, "shadow");

      cssContent += `}\n`;

      return cssContent;
    }

    // Generate dark theme CSS
    function generateDarkThemeCSS() {
      let cssContent = `/**
 * Auto Design Tokens - Dark Theme
 */

.auto-theme-dark {
`;
      cssContent += generateCssVariables(colors.darkSemanticColors, "color");
      cssContent += `}\n`;

      return cssContent;
    }

    // Generate typography utility classes
    function generateTypographyCSS() {
      let cssContent = `/**
 * Auto Design Tokens - Typography Classes
 */

/* Heading Styles */
`;
      // Dynamically generate classes for each text style
      if (typography.textStyles) {
        Object.entries(typography.textStyles).forEach(([styleName, style]) => {
          // Handle heading styles
          if (styleName.startsWith("h")) {
            const headingNum = styleName.substring(1);
            cssContent += `.auto-heading-${headingNum} {\n`;

            // Extract style key without direct property access to avoid undefined issues
            const fontFamilyKey =
              Object.keys(typography.fontFamilies).find(
                (key) => typography.fontFamilies[key] === style.fontFamily
              ) || "sans";

            let fontSizeKey = "";
            Object.entries(typography.fontSizes).forEach(([key, value]) => {
              if (value === style.fontSize) fontSizeKey = key;
            });

            let fontWeightKey = "";
            Object.entries(typography.fontWeights).forEach(([key, value]) => {
              if (value === style.fontWeight) fontWeightKey = key;
            });

            let lineHeightKey = "";
            Object.entries(typography.lineHeights).forEach(([key, value]) => {
              if (value === style.lineHeight) lineHeightKey = key;
            });

            let letterSpacingKey = "";
            if (style.letterSpacing && typography.letterSpacings) {
              Object.entries(typography.letterSpacings).forEach(
                ([key, value]) => {
                  if (value === style.letterSpacing) letterSpacingKey = key;
                }
              );
            }

            cssContent += `  font-family: var(--font-family-${fontFamilyKey});\n`;
            cssContent += `  font-size: var(--font-size-${fontSizeKey});\n`;
            cssContent += `  font-weight: var(--font-weight-${fontWeightKey});\n`;
            cssContent += `  line-height: var(--line-height-${lineHeightKey});\n`;

            if (letterSpacingKey) {
              cssContent += `  letter-spacing: var(--letter-spacing-${letterSpacingKey});\n`;
            }

            cssContent += `}\n\n`;
          }
        });

        // Add body text styles
        cssContent += `/* Body Text Styles */\n`;
        ["bodyLarge", "bodyDefault", "bodySmall", "bodyXSmall"].forEach(
          (styleName) => {
            if (typography.textStyles[styleName]) {
              const style = typography.textStyles[styleName];
              const className = styleName
                .replace(/([A-Z])/g, "-$1")
                .toLowerCase();
              const suffix = className.startsWith("body-")
                ? className.substring(5)
                : className;

              cssContent += `.auto-body-${suffix} {\n`;

              // Extract style key without direct property access to avoid undefined issues
              const fontFamilyKey =
                Object.keys(typography.fontFamilies).find(
                  (key) => typography.fontFamilies[key] === style.fontFamily
                ) || "sans";

              let fontSizeKey = "";
              Object.entries(typography.fontSizes).forEach(([key, value]) => {
                if (value === style.fontSize) fontSizeKey = key;
              });

              let fontWeightKey = "";
              Object.entries(typography.fontWeights).forEach(([key, value]) => {
                if (value === style.fontWeight) fontWeightKey = key;
              });

              let lineHeightKey = "";
              Object.entries(typography.lineHeights).forEach(([key, value]) => {
                if (value === style.lineHeight) lineHeightKey = key;
              });

              let letterSpacingKey = "";
              if (style.letterSpacing && typography.letterSpacings) {
                Object.entries(typography.letterSpacings).forEach(
                  ([key, value]) => {
                    if (value === style.letterSpacing) letterSpacingKey = key;
                  }
                );
              }

              cssContent += `  font-family: var(--font-family-${fontFamilyKey});\n`;
              cssContent += `  font-size: var(--font-size-${fontSizeKey});\n`;
              cssContent += `  font-weight: var(--font-weight-${fontWeightKey});\n`;
              cssContent += `  line-height: var(--line-height-${lineHeightKey});\n`;

              if (letterSpacingKey) {
                cssContent += `  letter-spacing: var(--letter-spacing-${letterSpacingKey});\n`;
              }

              cssContent += `}\n\n`;
            }
          }
        );
      }

      // Generate utility classes for each font property
      cssContent += `/* Font Size Utilities */\n`;
      Object.keys(typography.fontSizes).forEach((size) => {
        cssContent += `.auto-text-${size} {\n  font-size: var(--font-size-${size});\n}\n\n`;
      });

      cssContent += `/* Font Weight Utilities */\n`;
      Object.keys(typography.fontWeights).forEach((weight) => {
        cssContent += `.auto-font-${weight} {\n  font-weight: var(--font-weight-${weight});\n}\n\n`;
      });

      cssContent += `/* Line Height Utilities */\n`;
      Object.keys(typography.lineHeights).forEach((lineHeight) => {
        cssContent += `.auto-leading-${lineHeight} {\n  line-height: var(--line-height-${lineHeight});\n}\n\n`;
      });

      // Text color utility classes
      cssContent += `/* Text Color Utilities */\n`;
      Object.keys(colors.semanticColors)
        .filter((key) => key.startsWith("text"))
        .forEach((colorKey) => {
          const className = colorKey.replace("text", "").toLowerCase();
          cssContent += `.auto-text-${className} {\n  color: var(--color-${colorKey});\n}\n\n`;
        });

      return cssContent;
    }

    // Generate spacing utility classes
    function generateSpacingCSS() {
      let cssContent = `/**
 * Auto Design Tokens - Spacing Classes
 */

/* Margin Utilities */
`;
      // Generate margin utilities
      Object.keys(spacing.spacing).forEach((space) => {
        cssContent += `.auto-m-${space} {\n  margin: var(--spacing-${space});\n}\n\n`;

        // Directional margins
        cssContent += `.auto-mt-${space} {\n  margin-top: var(--spacing-${space});\n}\n\n`;
        cssContent += `.auto-mr-${space} {\n  margin-right: var(--spacing-${space});\n}\n\n`;
        cssContent += `.auto-mb-${space} {\n  margin-bottom: var(--spacing-${space});\n}\n\n`;
        cssContent += `.auto-ml-${space} {\n  margin-left: var(--spacing-${space});\n}\n\n`;

        // Horizontal and vertical margins
        cssContent += `.auto-mx-${space} {\n  margin-left: var(--spacing-${space});\n  margin-right: var(--spacing-${space});\n}\n\n`;
        cssContent += `.auto-my-${space} {\n  margin-top: var(--spacing-${space});\n  margin-bottom: var(--spacing-${space});\n}\n\n`;
      });

      // Special case for mx-auto
      cssContent += `.auto-mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n`;

      // Generate padding utilities
      cssContent += `/* Padding Utilities */\n`;
      Object.keys(spacing.spacing).forEach((space) => {
        cssContent += `.auto-p-${space} {\n  padding: var(--spacing-${space});\n}\n\n`;

        // Directional padding
        cssContent += `.auto-pt-${space} {\n  padding-top: var(--spacing-${space});\n}\n\n`;
        cssContent += `.auto-pr-${space} {\n  padding-right: var(--spacing-${space});\n}\n\n`;
        cssContent += `.auto-pb-${space} {\n  padding-bottom: var(--spacing-${space});\n}\n\n`;
        cssContent += `.auto-pl-${space} {\n  padding-left: var(--spacing-${space});\n}\n\n`;

        // Horizontal and vertical padding
        cssContent += `.auto-px-${space} {\n  padding-left: var(--spacing-${space});\n  padding-right: var(--spacing-${space});\n}\n\n`;
        cssContent += `.auto-py-${space} {\n  padding-top: var(--spacing-${space});\n  padding-bottom: var(--spacing-${space});\n}\n\n`;
      });

      // Border radius utilities
      cssContent += `/* Border Radius Utilities */\n`;
      Object.entries(spacing.borderRadius).forEach(([name, value]) => {
        const key = name === "DEFAULT" ? "" : `-${name.toLowerCase()}`;
        cssContent += `.auto-rounded${key} {\n  border-radius: var(--radius-${
          name === "DEFAULT" ? "default" : name.toLowerCase()
        });\n}\n\n`;
      });

      return cssContent;
    }

    // Generate shadows utility classes
    function generateShadowsCSS() {
      let cssContent = `/**
 * Auto Design Tokens - Shadow Classes
 */

/* Shadow Utilities */
`;
      // Generate shadow utilities
      Object.entries(shadows.shadows).forEach(([name, value]) => {
        const key = name === "DEFAULT" ? "default" : name.toLowerCase();
        cssContent += `.auto-shadow-${key} {\n  box-shadow: var(--shadow-${key});\n}\n\n`;
      });

      // Generate component shadow utilities
      cssContent += `/* Component Shadow Utilities */\n`;
      Object.entries(shadows.componentShadows).forEach(([name, value]) => {
        cssContent += `.auto-shadow-${name} {\n  box-shadow: var(--shadow-${name});\n}\n\n`;
      });

      return cssContent;
    }

    // Generate color utility classes
    function generateColorUtilityCSS() {
      let cssContent = `/**
 * Auto Design Tokens - Color Utility Classes
 */

/* Background Color Utilities */
`;
      // Background colors
      Object.keys(colors.semanticColors)
        .filter((key) => key.startsWith("background"))
        .forEach((colorKey) => {
          const className = colorKey.replace("background", "").toLowerCase();
          cssContent += `.auto-bg-${className} {\n  background-color: var(--color-${colorKey});\n}\n\n`;
        });

      // Border colors
      cssContent += `/* Border Color Utilities */\n`;
      Object.keys(colors.semanticColors)
        .filter((key) => key.startsWith("border"))
        .forEach((colorKey) => {
          const className = colorKey.replace("border", "").toLowerCase();
          cssContent += `.auto-border-${className} {\n  border-color: var(--color-${colorKey});\n}\n\n`;
        });

      // Button colors
      cssContent += `/* Button Utilities */\n`;
      Object.keys(colors.semanticColors)
        .filter((key) => key.startsWith("button") && !key.endsWith("Hover"))
        .forEach((colorKey) => {
          const className = colorKey.replace("button", "").toLowerCase();
          const hoverKey = `${colorKey}Hover`;
          cssContent += `.auto-button-${className} {\n  background-color: var(--color-${colorKey});\n  color: white;\n  border: none;\n  cursor: pointer;\n}\n\n`;

          if (colors.semanticColors[hoverKey]) {
            cssContent += `.auto-button-${className}:hover {\n  background-color: var(--color-${hoverKey});\n}\n\n`;
          }
        });

      // Add Explorer colors
      if (colors.explorerColors) {
        cssContent += `/* Explorer Background Colors */\n`;
        Object.entries(colors.explorerColors).forEach(
          ([colorName, value]) => {
            // Skip null or object values
            if (typeof value === "string") {
              cssContent += `.auto-explorer-bg-${colorName} {\n  background-color: var(--explorer-color-${colorName});\n}\n\n`;
            }
          }
        );

        cssContent += `/* Explorer Text Colors */\n`;
        Object.entries(colors.explorerColors).forEach(
          ([colorName, value]) => {
            // Skip null or object values
            if (typeof value === "string") {
              cssContent += `.auto-explorer-text-${colorName} {\n  color: var(--explorer-color-${colorName});\n}\n\n`;
            }
          }
        );
      }

      // Add Explorer Gradients
      if (colors.gradients) {
        cssContent += `/* Explorer Gradient Utilities */\n`;

        // Process background gradients
        if (colors.gradients.background) {
          Object.entries(colors.gradients.background).forEach(
            ([name, value]) => {
              cssContent += `.auto-explorer-bg-gradient-${name} {\n  background: var(--explorer-gradient-background-${name});\n}\n\n`;
            }
          );
        }

        // Process button gradients
        if (colors.gradients.button) {
          Object.entries(colors.gradients.button).forEach(([name, value]) => {
            if (typeof value === "string") {
              cssContent += `.auto-explorer-button-gradient-${name} {\n  background: var(--explorer-gradient-button-${name});\n}\n\n`;
            }
          });

          // Process button hover gradients
          if (colors.gradients.button.hover) {
            Object.entries(colors.gradients.button.hover).forEach(
              ([name, value]) => {
                cssContent += `.auto-explorer-button-gradient-${name}:hover {\n  background: var(--explorer-gradient-button-hover-${name});\n}\n\n`;
              }
            );
          }
        }

        // Process card gradients
        if (colors.gradients.card) {
          Object.entries(colors.gradients.card).forEach(([name, value]) => {
            cssContent += `.auto-explorer-card-gradient-${name} {\n  background: var(--explorer-gradient-card-${name});\n}\n\n`;
          });
        }
      }

      return cssContent;
    }

    // Generate all CSS files
    function generateAllCSS() {
      const rootCSS = generateRootCSS();
      const darkThemeCSS = generateDarkThemeCSS();
      const typographyCSS = generateTypographyCSS();
      const spacingCSS = generateSpacingCSS();
      const shadowsCSS = generateShadowsCSS();
      const colorUtilitiesCSS = generateColorUtilityCSS();

      // Write individual token CSS files
      writeTokenCSSFile("./src/css/variables.css", rootCSS);
      writeTokenCSSFile("./src/css/dark-theme.css", darkThemeCSS);
      writeTokenCSSFile("./src/css/typography.css", typographyCSS);
      writeTokenCSSFile("./src/css/spacing.css", spacingCSS);
      writeTokenCSSFile("./src/css/shadows.css", shadowsCSS);
      writeTokenCSSFile("./src/css/color-utilities.css", colorUtilitiesCSS);

      // Combine all CSS into a single file
      const allCSS = 
        rootCSS + "\n" + 
        darkThemeCSS + "\n" + 
        typographyCSS + "\n" +
        spacingCSS + "\n" +
        shadowsCSS + "\n" +
        colorUtilitiesCSS;

      writeTokenCSSFile("./src/css/all-tokens.css", allCSS);
      
      // Copy all CSS files to dist
      fs.ensureDirSync("./dist/css");
      fs.copySync("./src/css", "./dist/css");
      fs.copySync("./src/css/all-tokens.css", "./dist/index.css");
    }

    // Execute the CSS generation process
    generateAllCSS();
    console.log("✅ CSS generated successfully");
  } catch (error) {
    console.error("❌ Error generating CSS:", error);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the generate CSS function
generateCSS(); 