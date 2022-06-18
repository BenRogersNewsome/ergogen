import pkg from './package.json'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs'

const external = ['makerjs', 'js-yaml', 'mathjs', 'kle-serial', '@jscad/openjscad', 'semver']
const plugins = [
  json(),
  babel({ babelHelpers: 'bundled' }),
  commonjs(),
]

export default [{
    input: 'src/ergogen.js',
    external,
    output: {
      name: 'ergogen',
      file: 'dist/ergogen.js',
      format: 'umd',
      banner: `/*!\n * Ergogen v${pkg.version}\n * https://zealot.hu/ergogen\n */\n`,
      globals: {
        'makerjs': 'makerjs',
        'js-yaml': 'jsyaml',
        'mathjs': 'math',
        'kle-serial': 'kle',
        '@jscad/openjscad': 'myjscad',
        'semver': 'semver'
      },
      plugins,
    },
  },
  {
    input: 'src/cli.js',
    external,
    output: {
      name: 'ergogen',
      file: 'dist/cli.js',
      format: 'umd',
      banner: `/*!\n * Ergogen v${pkg.version}\n * https://ergogen.xyz\n */\n`,
      globals: {
        'makerjs': 'makerjs',
        'js-yaml': 'jsyaml',
        'mathjs': 'math',
        'kle-serial': 'kle'
      },
      plugins,
    }
  },
]