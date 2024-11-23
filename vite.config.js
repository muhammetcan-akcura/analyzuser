import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgr from '@svgr/rollup';

export default defineConfig({
    resolve: {
        alias: {
            src: resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx', '.json'], // Desteklenen uzantıları ekleyin
    },
    plugins: [
        react({
            include: "**/*.{jsx,js}", // JSX içeren tüm dosyaları işle
        }),
        svgr({
            exportAsDefault: true,
        }),
    ],
    esbuild: {
        loader: "jsx", // Tüm .js dosyalarını JSX olarak işle
        include: /src\/.*\.[jt]sx?$/, // src klasöründeki tüm js/jsx dosyalarını dahil et
        jsx: 'automatic', // React 17+ için otomatik JSX dönüşümü
    },
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx', // JS dosyalarını JSX olarak yükle
            },
        },
    },
});