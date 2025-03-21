import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Specifies the root URL of the application
  server: {
    port: 3015, // To run the app on port 3013
    open: true, // If we want to open the app once its started
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: { exportType: 'named', ref: true, svgo: false, titleProp: true },
      include: '**/*.svg',
    }),
  ],
});
