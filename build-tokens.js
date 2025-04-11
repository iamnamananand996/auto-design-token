/**
 * build-tokens.js
 * Script to automatically generate CSS files from token definitions
 */

import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';

console.log('⚙️ Compiling tokens...');

// First, ensure token output directories exist
fs.ensureDirSync('./dist/tokens');
fs.ensureDirSync('./src/css');

try {
  // Compile TypeScript tokens to JavaScript
  execSync('npx tsc --project tsconfig.tokens.json');
  
  // Wait a moment to ensure files are written to disk
  console.log('✅ Tokens compiled successfully');
  
  // Dynamically import the compiled tokens
  async function generateCSS() {
    try {
      // Import the compiled token files
      const { default: colors } = await import('./dist/tokens/colors.js');
      const { default: typography } = await import('./dist/tokens/typography.js');
      const { default: spacing } = await import('./dist/tokens/spacing.js');
      
      console.log('⚙️ Generating CSS files from tokens...');
      
      // Simple utility to create CSS files with content
      function writeTokenCSSFile(filename, content) {
        fs.writeFileSync(filename, content);
        console.log(`Created ${filename}`);
      }
      
      // Generate CSS variables from any token object
      function generateCssVariables(tokenObj, prefix = '', parentKey = '') {
        let cssContent = '';
        
        Object.entries(tokenObj).forEach(([key, value]) => {
          const fullKey = parentKey ? `${parentKey}-${key}` : key;
          
          if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
            // If the value is an object (but not an array), recursively process it
            cssContent += generateCssVariables(value, prefix, fullKey);
          } else {
            // It's a leaf node, generate a CSS variable
            cssContent += `  --${prefix}-${fullKey}: ${value};\n`;
          }
        });
        
        return cssContent;
      }
      
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
        cssContent += generateCssVariables(colors.colors, 'color');
        
        cssContent += `\n  /* Semantic Colors (Light Theme) */\n`;
        cssContent += generateCssVariables(colors.semanticColors, 'color');
        
        cssContent += `\n  /* Typography */\n`;
        cssContent += generateCssVariables(typography.fontFamilies, 'font-family');
        
        cssContent += `\n  /* Font Sizes */\n`;
        cssContent += generateCssVariables(typography.fontSizes, 'font-size');
        
        cssContent += `\n  /* Font Weights */\n`;
        cssContent += generateCssVariables(typography.fontWeights, 'font-weight');
        
        cssContent += `\n  /* Line Heights */\n`;
        cssContent += generateCssVariables(typography.lineHeights, 'line-height');
        
        if (typography.letterSpacings) {
          cssContent += `\n  /* Letter Spacing */\n`;
          cssContent += generateCssVariables(typography.letterSpacings, 'letter-spacing');
        }
        
        cssContent += `\n  /* Spacing */\n`;
        cssContent += generateCssVariables(spacing.spacing, 'spacing');
        
        cssContent += `\n  /* Border Radius */\n`;
        Object.entries(spacing.borderRadius).forEach(([name, value]) => {
          const key = name === 'DEFAULT' ? 'default' : name.toLowerCase();
          cssContent += `  --radius-${key}: ${value};\n`;
        });
        
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
        cssContent += generateCssVariables(colors.darkSemanticColors, 'color');
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
        Object.entries(typography.textStyles).forEach(([styleName, style]) => {
          // Handle heading styles
          if (styleName.startsWith('h')) {
            const headingNum = styleName.substring(1);
            cssContent += `.auto-heading-${headingNum} {\n`;
            
            // Extract style key without direct property access to avoid undefined issues
            const fontFamilyKey = Object.keys(typography.fontFamilies).find(key => 
              typography.fontFamilies[key] === style.fontFamily) || 'sans';
              
            let fontSizeKey = '';
            Object.entries(typography.fontSizes).forEach(([key, value]) => {
              if (value === style.fontSize) fontSizeKey = key;
            });
            
            let fontWeightKey = '';
            Object.entries(typography.fontWeights).forEach(([key, value]) => {
              if (value === style.fontWeight) fontWeightKey = key;
            });
            
            let lineHeightKey = '';
            Object.entries(typography.lineHeights).forEach(([key, value]) => {
              if (value === style.lineHeight) lineHeightKey = key;
            });
            
            let letterSpacingKey = '';
            if (style.letterSpacing) {
              Object.entries(typography.letterSpacings).forEach(([key, value]) => {
                if (value === style.letterSpacing) letterSpacingKey = key;
              });
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
        ['bodyLarge', 'bodyDefault', 'bodySmall', 'bodyXSmall'].forEach((styleName) => {
          if (typography.textStyles[styleName]) {
            const style = typography.textStyles[styleName];
            const className = styleName.replace(/([A-Z])/g, '-$1').toLowerCase();
            const suffix = className.startsWith('body-') ? className.substring(5) : className;
            
            cssContent += `.auto-body-${suffix} {\n`;
            
            // Extract style key without direct property access to avoid undefined issues
            const fontFamilyKey = Object.keys(typography.fontFamilies).find(key => 
              typography.fontFamilies[key] === style.fontFamily) || 'sans';
              
            let fontSizeKey = '';
            Object.entries(typography.fontSizes).forEach(([key, value]) => {
              if (value === style.fontSize) fontSizeKey = key;
            });
            
            let fontWeightKey = '';
            Object.entries(typography.fontWeights).forEach(([key, value]) => {
              if (value === style.fontWeight) fontWeightKey = key;
            });
            
            let lineHeightKey = '';
            Object.entries(typography.lineHeights).forEach(([key, value]) => {
              if (value === style.lineHeight) lineHeightKey = key;
            });
            
            let letterSpacingKey = '';
            if (style.letterSpacing) {
              Object.entries(typography.letterSpacings).forEach(([key, value]) => {
                if (value === style.letterSpacing) letterSpacingKey = key;
              });
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
          .filter(key => key.startsWith('text'))
          .forEach((colorKey) => {
            const className = colorKey.replace('text', '').toLowerCase();
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
          const key = name === 'DEFAULT' ? '' : `-${name.toLowerCase()}`;
          cssContent += `.auto-rounded${key} {\n  border-radius: var(--radius-${name === 'DEFAULT' ? 'default' : name.toLowerCase()});\n}\n\n`;
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
          .filter(key => key.startsWith('background'))
          .forEach((colorKey) => {
            const className = colorKey.replace('background', '').toLowerCase();
            cssContent += `.auto-bg-${className} {\n  background-color: var(--color-${colorKey});\n}\n\n`;
          });

        // Border colors
        cssContent += `/* Border Color Utilities */\n`;
        Object.keys(colors.semanticColors)
          .filter(key => key.startsWith('border'))
          .forEach((colorKey) => {
            const className = colorKey.replace('border', '').toLowerCase();
            cssContent += `.auto-border-${className} {\n  border-color: var(--color-${colorKey});\n}\n\n`;
          });

        // Button colors
        cssContent += `/* Button Utilities */\n`;
        Object.keys(colors.semanticColors)
          .filter(key => key.startsWith('button') && !key.endsWith('Hover'))
          .forEach((colorKey) => {
            const className = colorKey.replace('button', '').toLowerCase();
            const hoverKey = `${colorKey}Hover`;
            cssContent += `.auto-button-${className} {\n  background-color: var(--color-${colorKey});\n  color: white;\n  border: none;\n  cursor: pointer;\n}\n\n`;
            
            if (colors.semanticColors[hoverKey]) {
              cssContent += `.auto-button-${className}:hover {\n  background-color: var(--color-${hoverKey});\n}\n\n`;
            }
          });

        return cssContent;
      }

      // Generate all CSS files
      function generateAllCSS() {
        // Generate individual CSS files
        const rootCSS = generateRootCSS();
        writeTokenCSSFile('src/css/root.css', rootCSS);
        
        const darkThemeCSS = generateDarkThemeCSS();
        writeTokenCSSFile('src/css/dark-theme.css', darkThemeCSS);
        
        const typographyCSS = generateTypographyCSS();
        writeTokenCSSFile('src/css/typography.css', typographyCSS);
        
        const spacingCSS = generateSpacingCSS();
        writeTokenCSSFile('src/css/spacing.css', spacingCSS);
        
        const colorUtilityCSS = generateColorUtilityCSS();
        writeTokenCSSFile('src/css/colors.css', colorUtilityCSS);
        
        // Generate combined CSS file
        const combinedCSS = `/**
 * Auto Design Tokens - Combined CSS
 * GENERATED FILE - DO NOT EDIT DIRECTLY
 */

${rootCSS}

${darkThemeCSS}

${typographyCSS}

${spacingCSS}

${colorUtilityCSS}
`;
        writeTokenCSSFile('src/css/index.css', combinedCSS);
        
        console.log('✅ CSS generated successfully');
      }
      
      // Generate all CSS files
      await generateAllCSS();
      
    } catch (error) {
      console.error('❌ Error generating CSS:', error);
      process.exit(1);
    }
  }
  
  // Run the CSS generation
  generateCSS();
  
} catch (error) {
  console.error('❌ Error compiling tokens:', error);
  process.exit(1);
} 