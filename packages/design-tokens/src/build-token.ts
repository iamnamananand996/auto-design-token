import colors from './tokens/colors';
import shadows from './tokens/shadows';
import spacing from './tokens/spacing';
import typography from './tokens/typography';

type TokenValue = string | number | Record<string, any>;

/**
 * Add prefix to all token keys
 * @param tokens Object containing design tokens
 * @param prefix Prefix to add to each token key
 * @returns New object with prefixed keys
 */
function addPrefixToTokens(
  tokens: Record<string, TokenValue>,
  prefix: string
): Record<string, TokenValue> {
  const result: Record<string, TokenValue> = {};

  Object.entries(tokens).forEach(([key, value]) => {
    // If value is an object and not a string/number, recursively add prefix
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      result[`${prefix}${key}`] = addPrefixToTokens(value as Record<string, TokenValue>, prefix);
    } else {
      result[`${prefix}${key}`] = value;
    }
  });

  return result;
}

/**
 * Build a complete design token object with prefixed keys
 * @param prefix Prefix to add to all token keys
 * @returns Object containing all design tokens with prefixed keys
 */
export function buildTokens(prefix: string = 'auto-'): Record<string, any> {
  return {
    colors: {
      // Add drive and explorer prefixes to color tokens
      ...addPrefixToTokens(colors.drive, `${prefix}drive-`),
      ...addPrefixToTokens(colors.explorer, `${prefix}explorer-`),
    },

    fontFamily: addPrefixToTokens(typography.fontFamilies, prefix),
    fontSize: addPrefixToTokens(typography.fontSizes, prefix),
    fontWeight: addPrefixToTokens(typography.fontWeights, prefix),
    lineHeight: addPrefixToTokens(typography.lineHeights, prefix),
    letterSpacing: addPrefixToTokens(typography.letterSpacings, prefix),

    boxShadow: addPrefixToTokens(
      {
        ...shadows.shadows,
        ...shadows.componentShadows,
      },
      prefix
    ),

    spacing: addPrefixToTokens(spacing.spacing, prefix),
    borderRadius: addPrefixToTokens(spacing.borderRadius, prefix),
    screens: addPrefixToTokens(spacing.breakpoints, prefix),
    container: {
      center: true,
      padding: '1rem',
      screens: addPrefixToTokens(spacing.containerWidths, prefix),
    },
  };
}

/**
 * Example of how to use this in tailwind.config.ts:
 *
 * import { buildTokens } from '@auto/design-tokens';
 *
 * export default {
 *   theme: {
 *     extend: buildTokens(),
 *   },
 * }
 */

export default buildTokens;
