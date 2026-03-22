import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { resolve } from 'path'

export default defineConfig({
    plugins: [react(), libInjectCss(), dts()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'gr-toasty',
            formats: ['es', 'cjs'],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                assetFileNames: 'gr-toasty[extname]',
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    }
})