import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json' assert { type: 'json' };
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    // Copy CSS file to dist folder for direct import
    copy({
      targets: [
        // Copy index.css to dist folder for import as "@auto-design-token/dist/index.css"
        { src: 'src/css/index.css', dest: 'dist' }
      ],
      verbose: true
    }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
}; 