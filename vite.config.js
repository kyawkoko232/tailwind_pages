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
            input: {
                index: 'index.html',
                blog:  'blog.html',  
              },
    
        },
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    },

    resolve: {
        alias: {
          '@node_modules': path.resolve(__dirname, 'node_modules/'),
        },
      },
}