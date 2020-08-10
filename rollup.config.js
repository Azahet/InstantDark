import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';

export default {
    input: 'src/js/main.js',
    output: {
        format: 'cjs',
        file: 'ext/dist/main.js'
    },
    plugins: [
        commonjs(), // prise en charge de require
        resolve(), // prise en charge des modules depuis node_modules
        babel(), // transpilation
        terser(), // minification
        scss({
            output: true,
            watch: 'src/scss',
        })
    ]
};