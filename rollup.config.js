import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'
import license from 'rollup-plugin-license'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

const header = `Ontological proof v${pkg.version} 
Casper Søkol, <%= moment().format('YYYY') %>
j-heavy.github.io
Distributed under the MIT license`

const config = {
  input: 'src/main.js',
  output: [
    { name: 'OntologicalProof', file: 'dist/main.umd.js', format: 'umd' },
    { name: 'OntologicalProof', file: 'dist/main.cjs.js', format: 'cjs' },
    { name: 'OntologicalProof', file: 'dist/main.esm.js', format: 'es' }
  ],
  moduleName: 'OntologicalProof',
  plugins: [
    resolve(), 
    commonjs(),
    babel(),
    terser(),
    license({ banner: header })
  ]
}

export default config