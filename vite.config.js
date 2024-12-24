import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/RouterCrash/', // Ensure this matches your GitHub Pages subdirectory
});