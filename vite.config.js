import { defineConfig } from 'vite';
import { resolve } from 'path'
import path from 'path';

export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server: {
        port: 8080,
        hot: true
      },
    build: {   
        rollupOptions: {
            input : {
                index: './src/index.html',
                dasboard:  './src/dashboard/index.html',  
                ios:  './src/ios/index.html',  
                sample:  './src/ios/sample.html',  

              },
        },
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    },

    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@assets': path.resolve(__dirname, './src/assets'),
          '@modules': path.resolve(__dirname, './node_modules/'),
        },
      },
    optimizeDeps: {
        include: ['./src/*.{js,ts,jsx,tsx,html}',"./src/**/*.{js,ts,jsx,tsx,html}"],
      }
}