/**
 * Auto Design Tokens
 *
 * This is the main entry point for the design tokens library.
 * It exports all the tokens from the tokens directory.
 */

import { buildTokens } from './build-token';
export const autoTokens = buildTokens();

// Export all tokens as a single object
export default { autoTokens };
