/* eslint-disable @typescript-eslint/no-var-requires */
const postcss = require('rollup-plugin-postcss');
const typescript = require('@rollup/plugin-typescript');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const resolve = require('@rollup/plugin-node-resolve').default;

module.exports = {
  input: 'src/index.tsx',
  output: [
    {
      dir: 'dist',
      format: 'es',
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    typescript({
      exclude: ['**/*.stories.ts', '**/*.stories.tsx'],
    }),
    postcss({
      modules: true,
    }),
  ],
};
